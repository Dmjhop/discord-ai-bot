const { SlashCommandBuilder } = require("discord.js")
const { Configuration, OpenAIApi } = require("openai")
const dotenv = require("dotenv")

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_TOKEN,
})

const openai = new OpenAIApi(configuration)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chat-gpt")
    .setDescription("Talk to ChatGPT!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("input to echo back")
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = await interaction.options.get("input")

    console.log(`\n \n This was the input ${input.value} \n \n`)

    async function ask(prompt) {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      const answer = response.data.choices[0].text
      console.log(answer)
    }
    //Ask an example question

    // const aiData = await ask(input.value)

    await interaction.reply(
      ask("What are the names of the planets in the solar system?")
    )
  },
}

// `${aiData}`
