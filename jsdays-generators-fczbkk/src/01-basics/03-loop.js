function* basicGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = basicGenerator();
for (const result of myGenerator) {
  console.log(result); // 1, 2, 3
}
