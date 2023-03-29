function* rangeGenerator(start = 0, end = 10, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

console.log([...rangeGenerator()]);
console.log([...rangeGenerator(1, 7, 2)]);
console.log([...rangeGenerator(0, 100, 10)]);
