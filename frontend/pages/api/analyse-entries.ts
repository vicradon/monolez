import { NextApiRequest, NextApiResponse } from "next";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { entries } = req.body;

  const openAIResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: entries.join("\n"),
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  res.status(200).json({ data: openAIResponse.data });
}
