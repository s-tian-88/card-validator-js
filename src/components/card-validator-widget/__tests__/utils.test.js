import { cardNumberValidator, cardPaymentSystemValidator } from '../utils';

test.each([
  ['4024007108004259', true],
  ['6011449330019392', true],
  ['30218012169001', true],
  ['4026538944389627', true],
  ['4175005548293281', true],
  ['5408884555039100', true],
  ['3589509247832465', true],
  ['12345678', false],
])('%i %s', (number, expected) => {
  expect(cardNumberValidator(number)).toBe(expected);
});


test.each([
  ['4024007108004259', 'visa'],
  ['4916670728019568', 'visa'],
  ['4556057339295379383', 'visa'],
  ['5408884555039100', 'master-card'],
  ['2222222222222222', 'mir'],
  ['3123123123', 'american-express'],
])('%i - %s', (number, expected) => {
  expect(cardPaymentSystemValidator(number)).toBe(expected);
});
