function calculateValidationNumber(numbers) {
  const arrNumbers = numbers.toString().split('').map(Number);
  const sum = arrNumbers.reduce((total, num) => total += num);
  return (sum >= 10) ? calculateValidationNumber(sum) : sum;   
}
console.log(calculateValidationNumber(444444));
console.log(calculateValidationNumber(1234));
console.log(calculateValidationNumber(23478998));
