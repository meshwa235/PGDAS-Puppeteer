var { info2 } = require('./Activities.js');
var { info1 } = require('./RPA.js');
var { check } = require('./checkDeclaration.js');
var { rectify } = require('./correcting.js');
async function info(url, page, browser) {
    // try {
        await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/Consulta');
        await page.type('#ano', '2020');
        await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > div:nth-child(2) > div > form > div > button');
        await check(url, page, browser);
        // await rectify(url,page,browser);
        // await info1(url, page, browser);
        // await info2(url, page, browser);
    // }
    // catch (err) {
    //     console.log('PA error');
    // }
}
exports.info = info;