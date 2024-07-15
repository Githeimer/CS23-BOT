import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import { commands_list } from "../data/commands.js";
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
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

if (!client_login_token || !CLIENT_ID || !GUILD_ID) {
  console.error("Missing environment variables. Please check your .env file.");
  process.exit(1);
}

const rest = new REST({ version: "10" }).setToken(client_login_token);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isChatInputCommand()) {
      console.log("/" + interaction.commandName + " command invoked");

      if (interaction.commandName === "hello") {
        await interaction.reply({
          content: `${interaction.user.tag} said hello to ${
            interaction.options.get("username").value
          }`,
        });
      }

      if (interaction.commandName === "ping") {
        if (interaction.options.get("pinguser")) {
          await interaction.reply({
            content: `yo, ${interaction.options.get("pinguser").value}`,
          });
        } else {
          await interaction.reply({
            content: `yo pinged!`,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error handling interaction:", error);
  }
});

const main = async () => {
  const commands = commands_list;

  try {
    console.log(`Started refreshing application (/) commands.`);
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    console.log(`Successfully reloaded application (/) commands.`);
  } catch (error) {
    console.error("Error reloading application (/) commands:", error);
  }

  client.login(client_login_token);
};

main();
