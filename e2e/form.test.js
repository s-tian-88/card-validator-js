import puppeteer from 'puppeteer';

describe('Inn form', () => {

  let browser;
  let page;

  beforeEach (async () => {
    
    browser = await puppeteer.launch({
      headlwss: false,
      slowMo: 100,
      devtools: true,
      args: ['--start-maximized', ]
    });

    page = await browser.newPage();

  });

  test('Form should render on start page', async () => {

    await page.goto('http://localhost:9000');
    await page.waitForSelector('form');

  });

  test('Form input should add .valid class if inn is valid', async () => {

    await page.goto('http://localhost:9000');
    await page.waitForSelector('.form-inline');

    const form = await page.$('.form-inline');
    const input = await form.$('.input-field');

    await input.type('4276550016500442');

    await page.waitForSelector('.valid, .disable');

  });

  afterEach (async () => {
    await browser.close();
  });

});
