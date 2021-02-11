const { clear } = require("console");

async function info(url, page,browser) {
    await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao?clear=1');
    await page.waitForSelector('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a');
    await page.click('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a'); 
    await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao');
    await page.waitForSelector('#pa');
    await page.type('#pa','012021');
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button')
    await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.waitForTimeout(5000);
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input')
    await page.type('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input',"10,00");
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button')
    await page.click('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.waitForTimeout(5000);
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div')
    await page.$eval('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div', el => el.children[2].children[2].children[0].children[0].children[11].click());
    await page.waitForSelector('#btn-salvar')
    await page.click('#btn-salvar');
    await page.waitForTimeout(5000);
    await page.goto('C:/Users/6109693/OneDrive_2021-02-07/site_receita_pgdas/receita_pgdas/assets/downloads/PGDASD-DAS-79660486201905002.pdf')
}
exports.info = info;