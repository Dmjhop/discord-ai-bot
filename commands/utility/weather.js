const { SlashCommandBuilder } = require("discord.js")
const { getWeather } = require("../../controllers/weather-cont")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Gives current weather according to a zip code!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("input to echo back")
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = await interaction.options.get("input")

    console.log(`\n \n This was the input ${input.value} \n \n`)

    const weatherData = await getWeather(input.value)

    console.log(weatherData)

    await interaction.reply(
      `The weather in ${weatherData.name} is the following \n
      The current temperature is ${weatherData.main.temp}°F \n
      The high today will be ${weatherData.main.temp_max}°F and the low will be ${weatherData.main.temp_min}°F \n
      `
    )
  },
}
