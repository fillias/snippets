function* powerSetGenerator(set) {
  const maxPosition = Math.pow(2, set.length) - 1;
  let position = 0;
  while (position++ < maxPosition) {
    yield set.filter((_, index) => (position >> index) & 1);
  }
}

console.log([...powerSetGenerator([1, 2, 3])]);
