var { revenueCondition } = require('./revenueCondition.js')
async function calculationPeriod(url, page, browser, stringForRectify) {
    try {
        await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao');
        await page.waitForSelector('#pa');
        let value = stringForRectify;
        await page.type('#pa', value);
        await page.waitForSelector('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
        await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
        await page.waitForTimeout(5000);
        await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input');
        await revenueCondition(url, page, browser);
        await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
        await page.click('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    }
    catch (err) {
        await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
        console.log('RPA error', err);
    }
}
exports.calculationPeriod = calculationPeriod;  