import { Client, GatewayIntentBits } from "discord.js";

import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const client_login_token = process.env.DISCORD_TOKEN;
client.login(client_login_token);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("messageCreate", (message) => {
  console.log(`${message.author.tag} : ${message.content}`);
});
