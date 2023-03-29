function* generator(): Generator<number, string, boolean> {
  yield 1;
  yield 2;
  yield 3;
  return "abc";
}

const gen = generator();
gen.next(true);
