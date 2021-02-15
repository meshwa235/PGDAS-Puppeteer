async function revenueCondition(url, page, browser) {
    try {
        let val = '';
        const num = await page.evaluate((val) => {
            if (document.querySelector("body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input").value == '0,00') {
                val = document.querySelector('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input').value;
                val = '10,00';
                return val;
            }
            else {
                val = document.querySelector("body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input").value;
                return val;
            }
        }, val);
        await page.type('body > div.wrapper > div > div:nth-child(3) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > form > div.row > div:nth-child(1) > div > input', num);
    }
    catch (err) {
        await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
        console.log('condition error', err);
    }
}
exports.revenueCondition = revenueCondition;