export function cardNumberValidator(number) {
  let resultSum = 0;

  const cardNumbers = number.toString().split('').map(Number);

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
  const id = number.toString()[0];

  const paymentCardSystem = {
    2: 'МИР',
    3: 'American Express',
    4: 'Visa',
    5: 'MasterCard',
    6: 'UnionPay',
  };

  return paymentCardSystem[id];
}
