function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
    if (id >= 3) {
      return "my return value";
    }
  }
}

const myGenerator = idGenerator();
// console.log([...myGenerator]);

console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
// console.log(myGenerator.next());
