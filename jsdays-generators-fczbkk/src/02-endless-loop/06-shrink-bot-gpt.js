import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { default as OpenAi } from "openai";
import { OPEN_AI_KEY } from "../../config.js";

const { Configuration, OpenAIApi } = OpenAi;

const configuration = new Configuration({ apiKey: OPEN_AI_KEY });
const openai = new OpenAIApi(configuration);

const MAX_HISTORY_LENGTH = 20;
const PROMPT_SEED =
  "You are a silly psychologist in style of a character from Monty Python sketch. Answer in two sentences. In first sentence briefly summarize what patient said, in some funny and absurd way. In second sentence ask the patient a question. Keep the questions focused on what the patient said, but sometimes ask about an unrelated topic.";

async function* promptGenerator(history = [], promptSeed = PROMPT_SEED) {
  while (true) {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: promptSeed },
        ...history.slice(0 - MAX_HISTORY_LENGTH),
      ],
    });

    const message = response.data.choices[0].message;
    history.push(message);

    yield message.content;
  }
}

async function talkToShrinkBot() {
  const lineReader = readline.createInterface({ input, output });
  const chatHistory = [];
  const prompts = promptGenerator(chatHistory);

  let prompt = "Hello, I am your shrink bot. What is on your mind?";

  while (true) {
    const input = await lineReader.question(prompt + "\n> ");
    chatHistory.push({ role: "user", content: input });
    prompt = (await prompts.next()).value;
  }
}

await talkToShrinkBot();
