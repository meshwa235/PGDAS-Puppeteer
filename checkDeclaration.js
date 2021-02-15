async function checkDeclaration(url, page, browser) {
    try {
        await page.waitForTimeout(5000);
        let arrayj = await page.evaluate(async () => {
            let tbody = document.querySelector('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > div:nth-child(2) > table>tbody');
            console.log(tbody.childrenElementCount);
            let arrOfChildren = tbody.children;
            let arr = [];
            for (let i = 0; i < arrOfChildren.length; i++) {
                const element = arrOfChildren[i];
                let text = element.innerText;
                var patt = new RegExp("PA [0-9][0-9]/[0-9][0-9][0-9][0-9]");
                var res = patt.test(text);
                if (res) {
                    var patt = new RegExp("[0-9][0-9]/[0-9][0-9][0-9][0-9]");
                    var res = text.match(patt);
                    arr.push(res[0]);
                }
            }
            console.log(arr);
            return arr;
        });
        return arrayj;
    }
    catch (err) {
        await page.goto("C:/Users/6109693/OneDrive - Thomson Reuters Incorporated/Desktop/PGDAS-Puppeteer/Delay.html");
        console.log('Declaration error', err);
    }
}
exports.checkDeclaration = checkDeclaration;