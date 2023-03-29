function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const myGenerator = idGenerator();
for (let id of myGenerator) {
  console.log(id);
  if (id >= 3) {
    myGenerator.return();
  }
}
