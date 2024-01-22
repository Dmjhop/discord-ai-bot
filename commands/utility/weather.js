const { SlashCommandBuilder } = require("discord.js")
const { getWeather } = require("../../controllers/weather-cont")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Gives current weather according to a zip code!")
    .addStringOption((option) =>
      option
        .setName("zipcode")
        .setDescription("Where would you like weather info?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = await interaction.options.get("zipcode")

    console.log(`\n \n This was the input ${input.value} \n \n`)

    const weatherData = await getWeather(input.value)

    console.log(weatherData)

    await interaction.reply(
      `# Weather Report \n## For ${weatherData.name} \n### Temperature: \nCurrently it is **${weatherData.main.temp} °F** \nHigh: **${weatherData.main.temp_max} °F** \nLow: **${weatherData.main.temp_min} °F** \n
### Wind:\nSpeed: **${weatherData.wind.speed} mph**
      `
    )
  },
}
