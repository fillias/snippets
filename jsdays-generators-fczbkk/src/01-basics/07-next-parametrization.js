function* multiplicationGenerator() {
  let multiplier = 1;
  multiplier = yield 1 * multiplier;
  multiplier = yield 2 * multiplier;
  multiplier = yield 3 * multiplier;
}

const myGenerator = multiplicationGenerator();
// WARNING: the first call to next() is special, value is lost
console.log(myGenerator.next(555).value); // 1
console.log(myGenerator.next(2).value); // 4
console.log(myGenerator.next(3).value); // 9
