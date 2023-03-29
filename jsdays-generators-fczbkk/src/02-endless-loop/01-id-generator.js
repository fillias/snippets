function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const myGenerator = idGenerator();
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
