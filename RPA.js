var { condition } = require('./condition.js')
async function info1(url, page, browser) {
    // try {
    await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao');
    await page.waitForSelector('#pa');
    let value = '012021';
    await page.type('#pa', value);
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.waitForTimeout(5000);
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input');
    await condition(url, page, browser);
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.click('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    // }
    // catch (err) {
    //     console.log('RPA error');
    // }
}
exports.info1 = info1;  