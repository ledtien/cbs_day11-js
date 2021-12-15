var number, unit, ten, result;

number = 67;

ten = Math.floor(number / 10);
console.log({ ten });

unit = number % 10;
console.log({ unit });

result = ten + unit;
console.log({ result });
