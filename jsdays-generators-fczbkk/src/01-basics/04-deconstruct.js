function* basicGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = basicGenerator();
console.log([...myGenerator]);
