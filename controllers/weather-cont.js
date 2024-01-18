const { axios } = require("axios")

const dotenv = require("dotenv")

dotenv.config()

const getWeather = async (zipcode, req, res) => {
  try {
    const APIKey = process.env.OPENWEATHER_TOKEN
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${APIKey}&units=imperial`
    )
    console.log(data)
    return data
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { getWeather }
