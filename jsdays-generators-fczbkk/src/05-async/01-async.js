import { scheduler } from "node:timers/promises";

async function* asyncGenerator() {
  while (true) {
    await scheduler.wait(1000);
    yield new Date().toISOString();
  }
}

for await (const result of asyncGenerator()) {
  console.log(result);
}
