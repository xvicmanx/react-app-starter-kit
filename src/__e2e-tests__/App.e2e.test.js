import puppeteer from 'puppeteer';

require('dotenv').config();

const port = process.env.PORT || 3000;

// const DEBUG_CONFIG = {
//   headless: false,
//   slowMo: 250,
//   devtools: true,
// };

describe('On page load', () => {
  test('It loads correctly', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 1000,
      },
      userAgent: '',
    });

    await page.goto(`http://localhost:${port}`);

    const html = await page.$eval('.App__title', e => e.innerHTML);

    expect(html).toBe('Hello, world!');
  });
});
