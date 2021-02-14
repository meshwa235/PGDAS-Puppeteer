async function check(url, page, browser) {
    try {
        await page.evaluate(() => {
            let arr = document.querySelector('body > div.wrapper > div > div:nth-child(2) > div.col-md-10.col-sm-9 > div.container-fluid > div > div > div:nth-child(2) > table>tbody').innerText;
            console.log(arr);
        });
    }
    catch (err) {
        console.log('Declaration error');
    }
}
exports.check = check;