async function clear(url, page, browser) {
    await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao/rpa');
    await page.type('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input', '0,00');
    await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
    await page.click('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
}
exports.clear = clear;