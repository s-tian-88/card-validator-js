import { CardValidatorWidget } from '../card-validator-widget';
import { JSDOM } from 'jsdom';

describe('testing widget from jsdom', () => {

  beforeEach(() => {

    const dom = new JSDOM();
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;

  });

  test('testing widget start', () => {

    document.body.innerHTML = `<div class="container"></div>`;
    const container = document.querySelector('.container');
    const widget = new CardValidatorWidget(container);

    widget.start();

    expect(container.innerHTML).toEqual(CardValidatorWidget.markup);

  });

  afterEach(() => {
    
  });

});
