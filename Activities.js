async function Activities(url, page, browser) {
    try {
        await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/declaracao/atividades');
        await page.waitForSelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div');
        await page.evaluate(() => {
            document.getElementById('0001').children[0].children[11];
        });
        await page.waitForSelector('#btn-salvar');
        await page.click('#btn-salvar');
        // await page.waitForTimeout(5000);
        await page.goto('C:/Users/6109693/OneDrive_2021-02-07/site_receita_pgdas/receita_pgdas/assets/downloads/PGDASD-DAS-79660486201905002.pdf');
    }
    catch (err) {
        await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
        console.log('Activities error', err);
    }
}
exports.Activities = Activities;