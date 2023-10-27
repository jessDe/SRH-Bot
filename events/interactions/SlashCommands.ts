import {ChatInputCommandInteraction, Client, Events} from "discord.js";
import {logger} from "../../Bot";

module.exports = {
    event: Events.InteractionCreate,
    execute(interaction: ChatInputCommandInteraction, client: Client) {
        if (!interaction.isChatInputCommand()) return;

        // @ts-ignore
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            return interaction.reply({
                embeds: [
                    logger.info("This command is outdated.")
                ],
                ephemeral: true
            });
        }

        if (command.developer && interaction.user.id !== "476095096513626113") {
            return interaction.reply({
                embeds: [
                    logger.info("This command is only available to the developer.")
                ],
                ephemeral: true
            });
        }

        try {
            command.execute(interaction, client);
        } catch (e) {
            logger.error(`Error executing ${interaction.commandName}`)
            console.error(e)
        }
    }
}