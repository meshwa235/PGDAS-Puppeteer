async function rectify(url, page, browser) {
    try {
        await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao?clear=1');
        await page.waitForSelector('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a');
        await page.click('#accordion > div:nth-child(1) > div.panel-heading.title-menu > h4 > a');
    }
    catch (err) {
        console.log('correcting error');
    }
}
exports.rectify = rectify;