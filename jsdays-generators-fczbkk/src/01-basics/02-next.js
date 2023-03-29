function* basicGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = basicGenerator();
console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next()); // { value: 2, done: false }
console.log(myGenerator.next()); // { value: 3, done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }
// all following calls will return the same
console.log(myGenerator.next()); // { value: undefined, done: true }
