function* animalGenerator() {
  yield "cat";
  yield "dog";
  yield "dolphin";
  yield "tuna";
  yield "carp";
  yield "stork";
  yield "penguin";
}

console.log([...animalGenerator()]);
