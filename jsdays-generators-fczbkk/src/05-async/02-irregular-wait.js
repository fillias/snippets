import { scheduler } from "node:timers/promises";

async function* randomDelayGenerator() {
  while (true) {
    const randomDelay = Math.floor(Math.random() * 1000);
    await scheduler.wait(randomDelay);
    yield `I waited ${randomDelay}ms`;
  }
}

for await (const result of randomDelayGenerator()) {
  console.log(result);
}
