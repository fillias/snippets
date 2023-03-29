function* mammalGenerator() {
  yield "cat";
  yield "dog";
  yield "dolphin";
}

function* fishGenerator() {
  yield "tuna";
  yield "carp";
}

function* birdGenerator() {
  yield "stork";
  yield "penguin";
}

function* animalGenerator() {
  yield* mammalGenerator();
  yield* fishGenerator();
  yield* birdGenerator();
}

console.log([...animalGenerator()]);
