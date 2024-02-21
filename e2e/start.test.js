import puppeteer from 'puppeteer';
// import { fork } from 'child_process';

describe('Page start', () => {
  let browser;
  let page;
  // let server;

  // beforeAll(async ()  => {
  //   server = fork(`$(__dirname)/e2e/e2e.server.js`);
  //   await new Promise((resolve, reject)  => {
  //     server.on('error', reject);
  //     server.on('message', (message) => {
  //       if (message === 'ok') {
  //         resolve();
  //       }
  //     });
  //   });
  // });

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('body');
  });

  afterEach(async () => {
    await browser.close();
  });

  // afterAll(async () => {
  //   server.kill();
  // });
});
