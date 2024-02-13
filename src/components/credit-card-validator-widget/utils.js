export function cardNumberValidator(number) {
  let resultSum = 0;

  const cardNumbers = number.toString().split('').map(Number);

  for (const [index, value] of cardNumbers.entries()) {
    if (index % 2 === 0) {
      let buffer = value * 2;
      buffer > 9 ? resultSum += buffer - 9 : resultSum += buffer;
    } else {
      resultSum += value;
    }
  }
  return resultSum % 10 === 0 ? true : false;
};


export function cardSystemValidator(number) {

  const id = number.toString()[0];

  const paymantCardSystem = {
    '2': 'МИР',
    '3': 'American Express',
    '4': 'Visa',
    '5': 'MastrerCard'
  };

  return paymantCardSystem[id];
};
