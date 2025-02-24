let fs = require("fs");
let globalCrackingIndex = 0;
let { info } = require("./PA.js");
const Image = async (url, page) => {
  try {
    await page.goto(url, { waitUntil: 'load' });
    // Method to ensure that the element is loaded
    await page.waitForSelector('#captcha-img');
    const logo = await page.$('#captcha-img');
    await logo.screenshot({
      path: 'pic.png'
    });
    let base64 = await page.evaluate(() => {
      return JSON.parse(xmlhttp_init.responseText).Dados;
    });
    return base64;
  }
  catch (err) {
    console.log('Image error');
  }
}
async function solver(url, base64, page, browser, CRED) {
  try {
    var request = require('request');
    globalCrackingIndex += 1;
    var options = {
      'method': 'POST',
      'url': 'https://api.xcount.com.br/resolverCaptcha',
      'headers': {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnhjb3VudC5jb20uYnIiLCJpYXQiOjE1NjIwMTI1NDYsImV4cCI6bnVsbCwiZGF0YSI6eyJpZFVzdWFyaW8iOjczNywidGVtcG8iOm51bGwsImFwaSI6dHJ1ZSwiYWNlc3NvVmlhQWRtIjpmYWxzZX19.ISayvEoK-IWE3mztiigKLG0zjDe6Be_QPk3xVrL8QCU ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "urlPagina": "https://www8.receita.fazenda.gov.br/SimplesNacional/controleAcesso/Autentica.aspx?id=60", "imagemBase64": `${base64}`, "chaveAPIgoogle": "" })
    };
    request.get(options, async function (error, response) {
      if (error) throw new Error(error);
      CRED.captcha = JSON.parse(response.body)["message"];
      console.log(CRED.captcha);
      await page.type('#ctl00_ContentPlaceHolder_txtCNPJ', CRED.CNPJ_Number);
      await page.type('#ctl00_ContentPlaceHolder_txtCPFResponsavel', CRED.Responsible_Social_Security_Number);
      await page.type('#ctl00_ContentPlaceHolder_txtCodigoAcesso', CRED.Access_Code);
      await page.type('#txtTexto_captcha_serpro_gov_br', CRED.captcha);
      await page.click('#ctl00_ContentPlaceHolder_btContinuar');
      let newurl = await page.url();
      if (newurl == url) {
        page.reload();
        let image = await Image(url, page);
        await solver(url, image, page, browser, CRED);
      }
      else {
        let date = new Date();
        fs.appendFileSync("./cracking.txt", `${date.toString()} : ${globalCrackingIndex}->No of attempts by solver; \n`);
        await info(newurl, page, browser);
      }
    });
  }
  catch (err) {
    await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
    console.log('solver error', err);
  }
}
exports.Image = Image;
exports.solver = solver;