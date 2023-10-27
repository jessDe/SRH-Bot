import {ChatInputCommandInteraction, Client, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import {loadEvents} from "../../handlers/EventHandler";
import {loadCommands} from "../../handlers/CommandHandler";

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Reload all commands/events.")
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageWebhooks)
        .addSubcommand((options) => options
            .setName("events")
            .setDescription("Reload events."))
        .addSubcommand((options) => options
            .setName("commands")
            .setDescription("Reload commands.")),

    async execute(interaction: ChatInputCommandInteraction, client: Client) {
        const subCommand = interaction.options.getSubcommand();

        switch (subCommand) {
            case "events": {
                // @ts-ignore
                for (const [key, value] of client.events) {
                    await client.removeListener(key, value)
                }
                await loadEvents(client)
                await interaction.reply({
                    content: "Reloaded Events",
                    ephemeral: true,
                })
                break;
            }
            case "commands": {
                await loadCommands(client)
                await interaction.reply({
                    content: "Reloaded Commands",
                    ephemeral: true
                })
                break;
            }
        }
    }
}