const puppeteer = require('puppeteer');
require('dotenv').config();

const BOT = async () => {
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1920, height: 1080 },
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://accounts.google.co.id/');
    await page.waitForSelector('input[type="email"]');
    await page.focus('input[type="email"]');
    await page.keyboard.type(process.env.gmail, { delay: 50 });
    await page.click('#identifierNext');

    await page.waitForSelector('input[type="password"]');
    await page.focus('input[type="password"]');
    await page.keyboard.type(process.env.password, { delay: 50 });
    await page.click('#passwordNext');
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