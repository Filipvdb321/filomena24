import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

const URL = 'https://ugly.be/huis/te-koop/antwerpen-2018/filomenastraat-24-6umox';
const CONTENT_DIR = path.join(process.cwd(), 'content');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'content', 'images');

// Ensure directories exist
if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

async function extractContent() {
  console.log('Fetching', URL);
  const { data } = await axios.get(URL);
  const $ = cheerio.load(data);
  
  const imagesSet = new Set();
  
  $('img').each((i, el) => {
    let src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('srcset');
    if (src) {
        if (src.includes('srcset')) {
            const parts = src.split(',');
            const lastPart = parts[parts.length - 1].trim().split(' ')[0];
            src = lastPart;
        }
        if (!src.startsWith('data:') && !src.includes('logo') && !src.includes('avatar') && !src.includes('svg')) {
          if (src.startsWith('/')) src = 'https://ugly.be' + src;
          if (src.startsWith('//')) src = 'https:' + src;
          imagesSet.add(src);
        }
    }
  });

  const images = Array.from(imagesSet);
  console.log(`Found ${images.length} potential images.`);
  
  const downloadedImages = [];
  let count = 0;
  for (const imgUrl of images.slice(0, 30)) {
    try {
      count++;
      const pureUrl = imgUrl.split('?')[0];
      const ext = path.extname(pureUrl) || '.jpg';
      const filename = `image-${count}${ext}`;
      const filepath = path.join(IMAGES_DIR, filename);
      
      const response = await axios({ url: imgUrl, responseType: 'stream', headers: {'User-Agent': 'Mozilla/5.0'} });
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      console.log('Downloaded', filepath);
      downloadedImages.push(`/content/images/${filename}`);
    } catch (err) {
      console.error('Failed to download', imgUrl, err.message);
    }
  }

  const markdown = `---
title: "Zurenborgklassieker waar je elke dag opnieuw blij van wordt"
address: "Filomenastraat 24, 2018 Antwerpen"
agent_name: "Lien Vandenborre"
agent_phone: "03 309 10 10"
agent_email: "hallo@ugly.be"
epc: "B"
living_area: "205 m²"
bedrooms: 4
images:
${downloadedImages.map(img => "  - " + img).join('\n')}
---

De Filomenastraat is zo’n straat waar je vanzelf trager gaat wandelen. Een elegante Zurenborgstraat, omringd door erfgoedgevels, bomen en dat typische, zachte stadsritme waar deze wijk zo geliefd om is. Hier woon je rustig, bijna dorps, terwijl alles wat Antwerpen zo fijn maakt op wandelafstand ligt. Achter het prachtige geveltje van vandaag schuilt dit statige herenhuis, boordevol authenticiteit en ruimte. Geprikkeld? Kom binnen…

### Een inkom met allure
Binnenkomen doe je via een indrukwekkende marmeren inkomhal die meteen de toon zet. Dit is een huis met geschiedenis, en dat voel je van bij de eerste stap. Alles ademt grandeur, zonder afstandelijk te worden.

### Onder het huis, boven verwachting
Links van de inkom leidt een trap naar de volledig verwarmde kelderverdieping, maar noem dit gerust een volwaardige extra leeflaag. Eerst is er een wasruimte, verderop een kamer die vandaag dienstdoet als leeskamer, maar zich ook perfect leent als bureau of praktijkruimte: ideaal voor wie wonen en werken wil combineren. Je vindt hier ook een apart toilet én een buitenkoer die deels overdekt en deels open is: een intieme plek om even buiten te zijn, midden in de stad.

### Leven tussen marmer en hout
Op het gelijkvloers ontvouwt zich het hart van het huis. De aparte keuken werd vernieuwd en is volledig uitgerust met gasfornuis, oven, anderhalve spoelbak, koelkast en vaatwasser. Aansluitend ligt de leefruimte, waar authentieke elementen alle aandacht krijgen. De marmeren haard is een echte blikvanger, de houten vloer zorgt dan weer voor warmte en karakter. Een living die uitnodigt tot lange avonden, warme gesprekken en héérlijk thuisblijven.

### Een verdieping ertussen
Op de eerste tussenverdieping bevindt zich de badkamer. Deze is uitgerust met een douche, toilet en dubbele lavabo, en dankzij het raam is er natuurlijke verluchting en licht. Een fijne, comfortabele ruimte die logisch in het huis geïntegreerd is.

### Twee verdiepingen, vier slaapkamers
De eerste verdieping telt twee volwaardige slaapkamers. Hoge plafonds, rustige proporties en dat typische herenhuisgevoel zorgen ervoor dat elke kamer aanvoelt als een echte slaapruimte. En ook op de tweede verdieping vind je twee slaapkamers. Eén daarvan is deels een duplexkamer, wat extra dynamiek en speelsheid in het huis brengt. Perfect als master bedroom, creatieve ruimte of tienerkamer met een eigen wereldje.

### Handig om weten
Met een bewoonbare oppervlakte van 205 m² biedt dit huis bijzonder veel ruimte, zonder overweldigend te zijn. Het EPC-label B, de geïsoleerde gevels (met uitzondering van de voorgevel) en de gascondensatieketel van 2017 zorgen voor een comfortabele en efficiënte woning, klaar voor de volgende bewoners…
`;

  fs.writeFileSync(path.join(CONTENT_DIR, 'property.md'), markdown);
  console.log('Content saved to content/property.md');
}

extractContent();
