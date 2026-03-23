import axios from 'axios';
import * as cheerio from 'cheerio';

const URL = 'https://ugly.be/huis/te-koop/antwerpen-2018/filomenastraat-24-6umox';
axios.get(URL).then(({data}) => {
   const $ = cheerio.load(data);
   console.log('--- IMGS ---');
   $('img').each((i, el) => {
      console.log($(el).attr('src') || $(el).attr('data-src'));
   });
   console.log('--- BG IMGS ---');
   $('[style*="background-image"]').each((i, el) => {
      console.log($(el).attr('style'));
   });
   console.log('--- LINKS TO JPG ---');
   $('a[href$=".jpg"], a[href$=".jpeg"]').each((i, el) => {
      console.log($(el).attr('href'));
   });
   console.log('--- SCRIPT DATA ---');
   $('script[type="application/json"]').each((i, el) => {
       console.log($(el).html().substring(0, 200));
   });
});
