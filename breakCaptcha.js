let {info} = require("./PA");
const Image = async (url, page) => {
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

async function solver(url, base64, pages, browser, CRED) {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://api.xcount.com.br/resolverCaptcha',
    'headers': {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnhjb3VudC5jb20uYnIiLCJpYXQiOjE1NjIwMTI1NDYsImV4cCI6bnVsbCwiZGF0YSI6eyJpZFVzdWFyaW8iOjczNywidGVtcG8iOm51bGwsImFwaSI6dHJ1ZSwiYWNlc3NvVmlhQWRtIjpmYWxzZX19.ISayvEoK-IWE3mztiigKLG0zjDe6Be_QPk3xVrL8QCU ',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "urlPagina": "https://www8.receita.fazenda.gov.br/SimplesNacional/controleAcesso/Autentica.aspx?id=60", "imagemBase64": `${base64}`, "chaveAPIgoogle": "" })

  };
  // console.log(base64);
  request.get(options, async function (error, response) {
    if (error) throw new Error(error);
    CRED.captcha = JSON.parse(response.body)["message"];
    console.log(CRED.captcha);
    await pages.type('#ctl00_ContentPlaceHolder_txtCNPJ', CRED.CNPJ_Number);
    await pages.type('#ctl00_ContentPlaceHolder_txtCPFResponsavel', CRED.Responsible_Social_Security_Number);
    await pages.type('#ctl00_ContentPlaceHolder_txtCodigoAcesso', CRED.Access_Code);
    await pages.type('#txtTexto_captcha_serpro_gov_br', CRED.captcha);
    await pages.click('#ctl00_ContentPlaceHolder_btContinuar');
    let newurl = await pages.url();
    if (newurl == url) {
      pages.reload();
      let image = await Image(url, pages);
      await solver(url, image, pages, browser, CRED);
    }
    else{
      await info(newurl,pages,browser);
    }
  });

}

exports.Image = Image;
exports.solver = solver;