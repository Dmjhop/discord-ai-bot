console.log("I am alive!")

require("dotenv").config() //importing dotenv
const Discord = require("discord.js") //importing Discord.js

const client = new Discord.Client() //proceeds to create a new client for the bot

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.login(process.env.CLIENT_TOKEN)
