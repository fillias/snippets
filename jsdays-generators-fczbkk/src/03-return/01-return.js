function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
    if (id >= 3) {
      return;
    }
  }
}

const myGenerator = idGenerator();
console.log([...myGenerator]);
