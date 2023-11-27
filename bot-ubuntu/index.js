const puppeteer = require('puppeteer');
require('dotenv').config();

const BOT = async () => {
    const browser = await puppeteer.launch({
        defaultViewport: {width: 1920, height: 1080}
      });
    const page = await browser.newPage();
    await page.goto('https://accounts.google.co.id/');
    await page.setViewport({ width: 1080, height: 1024 });
    await page.type('#identifierId', process.env.gmail);
    await page.screenshot({path: 'screenshot.png'});

    // const searchResultSelector = '.search-box__link';
    // await page.waitForSelector(searchResultSelector);
    // await page.click(searchResultSelector);

    // Locate the full title with a unique string
    // const textSelector = await page.waitForSelector(
    //     'text/Customize and automate'
    // );
    // const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);

    // await browser.close();
}

BOT();