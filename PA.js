var { Activities } = require('./Activities.js');
var { calculationPeriod } = require('./calculationPeriod.js');
var { checkDeclaration } = require('./checkDeclaration.js');
var { rectify } = require('./rectify.js');
const { clear } = require('./clearHistory.js');
async function info(url, page, browser) {
    try {
        let arr = [];
        await page.goto('https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgdasd2018.app/Consulta');
        let number = 2021;
        do {
            await page.type('#ano', number.toString());
            await page.click('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > div:nth-child(2) > div > form > div > button');
            arr = await checkDeclaration(url, page, browser);
            number += 1;
            console.log(arr);
        } while (arr.length == 12);
        nextMonth = parseInt(arr[arr.length - 1].slice(0, 2)) + 1;
        stringForRectify = `${nextMonth < 10 ? '0' + nextMonth : nextMonth}${number - 1}`
        console.log(stringForRectify);
        await rectify(url, page, browser);
        await calculationPeriod(url, page, browser, stringForRectify);
        await Activities(url, page, browser);
        await clear(url, page, browser);
    }
    catch (err) {
        await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
        console.log('PA error', err);
    }
}
exports.info = info; 