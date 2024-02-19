export function cardNumberValidator(number) {
  if (number.length < 14 || number.length > 19) {
    return false;
  }

  let resultSum = 0;

  const cardNumbers = number.split('').map(Number);

  for (const [index, value] of cardNumbers.entries()) {
    if (index % 2 === 0) {
      const buffer = value * 2;
      buffer > 9 ? resultSum += buffer - 9 : resultSum += buffer;
    } else {
      resultSum += value;
    }
  }
  return resultSum % 10 === 0;
}

export function cardPaymentSystemValidator(number) {
  const id = number[0];

  const paymentCardSystem = {
    2: 'mir',
    3: 'american-express',
    4: 'visa',
    5: 'master-card',
    6: 'union-pay',
  };

  return paymentCardSystem[id];
}
