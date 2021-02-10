async function info(url, page) {
    await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao?clear=1');
    await page.waitForSelector('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a');
    await page.click('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a');
    await page.type('#pa', "012021");
    await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > button');
}
exports.info = info;