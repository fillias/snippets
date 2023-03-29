function* rangeGenerator() {
  for (let i = 0; i <= 10; i += 1) {
    yield i;
  }
}

console.log([...rangeGenerator()]);
