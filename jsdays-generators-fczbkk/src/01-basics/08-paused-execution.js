function* rangeGenerator(start = 0, end = 10, step = 1) {
  for (let i = start; i <= end; i += step) {
    console.log("before", i);
    yield i;
    console.log("after", i);
  }
}

const myGenerator = rangeGenerator();
myGenerator.next();
