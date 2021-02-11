const puppeteer = require('puppeteer');
let { Image, solver } = require("./breakCaptcha.js");
const CRED = { CNPJ_Number: '08605472000180', Responsible_Social_Security_Number: '02621522904', Access_Code: '310991267439', captcha: '' };
async function scrape() {

  url = 'https://www8.receita.fazenda.gov.br/SimplesNacional/controleAcesso/Autentica.aspx?id=60';
  const browser = await puppeteer.launch({ headless: false });
  const pages = await browser.newPage();

  await pages.setExtraHTTPHeaders({
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
  });
  let image = await Image(url, pages);
  await solver(url, image, pages, browser, CRED);
 
}
scrape();




