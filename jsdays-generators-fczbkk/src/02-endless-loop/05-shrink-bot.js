import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function* promptGenerator() {
  const responses = [
    "Please go on.",
    "How does that make you feel?",
    "What does that remind you of?",
    "Tell me more about that.",
  ];
  while (true) {
    yield responses[Math.floor(Math.random() * responses.length)];
  }
}

async function talkToShrinkBot() {
  const lineReader = readline.createInterface({ input, output });
  const prompts = promptGenerator();

  let prompt = "Hello, I am your shrink bot. What is on your mind?";

  while (true) {
    await lineReader.question(prompt + "\n> ");
    prompt = prompts.next().value;
  }
}

await talkToShrinkBot();
