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

  test ('testing validate data', () => {

    document.body.innerHTML = `<div class="container"></div>`;
    const container = document.querySelector('.container');
    const widget = new CardValidatorWidget(container);

    widget.start();

    const input = document.querySelector('.input-field');


    input.value = '4276550016500442';

    setTimeout(() => {
      expect(input.classList.contains('valid')).toBeTruthy()
    }, 1000);

  });

  afterEach(() => {
    
  });

});
