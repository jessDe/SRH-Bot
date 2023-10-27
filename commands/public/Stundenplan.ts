import {
    ChatInputCommandInteraction,
    Client,
    Embed,
    EmbedBuilder,
    PermissionsBitField,
    SlashCommandBuilder
} from "discord.js";
import {loadEvents} from "../../handlers/EventHandler";
import {loadCommands} from "../../handlers/CommandHandler";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stundenplan")
        .setDescription("Gibt den Stundenplan für den Tag"),


    async execute(interaction: ChatInputCommandInteraction, client: Client) {
        console.log("Stundenplan von "+interaction.member.user.username+" aufgerufen!");
        const date = new Date();
        var FachStunde1;
        var FachStunde2;
        var FachStunde3;
        var FachStunde4;

        var DozentStunde1;
        var DozentStunde2;
        var DozentStunde3;
        var DozentStunde4;
        switch (date.getDate()){
            case 10:
                FachStunde1 = "ALD"
                FachStunde2 = "ALD"
                FachStunde3 = "PRG"
                FachStunde4 = "PRG"
                DozentStunde1 = "Böttcher"
                DozentStunde2 = "Böttcher"
                DozentStunde3 = "Erkert"
                DozentStunde4 = "Erkert"
                break
            case 11:
                FachStunde1 = "ALD"
                FachStunde2 = "ALD"
                FachStunde3 = "PRG"
                FachStunde4 = "PRG"
                DozentStunde1 = "Böttcher"
                DozentStunde2 = "Böttcher"
                DozentStunde3 = "Erkert"
                DozentStunde4 = "Erkert"
                break
            case 12:
                FachStunde1 = "ALD"
                FachStunde2 = "ALD"
                FachStunde3 = "PRG"
                FachStunde4 = "PRG"
                DozentStunde1 = "Böttcher"
                DozentStunde2 = "Böttcher"
                DozentStunde3 = "Erkert"
                DozentStunde4 = "Erkert"
                break
            case 13:
                FachStunde1 = "---"
                FachStunde2 = "ENG"
                FachStunde3 = "DBK"
                FachStunde4 = "DBK"
                DozentStunde1 = "---"
                DozentStunde2 = "Häfele"
                DozentStunde3 = "Bernerth"
                DozentStunde4 = "Bernerth"
                break
            case 16:
                FachStunde1 = "KOM"
                FachStunde2 = "KOM"
                FachStunde3 = "---"
                FachStunde4 = "---"
                DozentStunde1 = "Erkert"
                DozentStunde2 = "Erkert"
                DozentStunde3 = "---"
                DozentStunde4 = "---"
                break
            case 17:
                FachStunde1 = "PRG"
                FachStunde2 = "PRG"
                FachStunde3 = "PRG"
                FachStunde4 = "---"
                DozentStunde1 = "Erkert"
                DozentStunde2 = "Erkert"
                DozentStunde3 = "Erkert"
                DozentStunde4 = "---"
                break
            default:
                FachStunde1 = "Keine Info"
                FachStunde2 = "Keine Info"
                FachStunde3 = "Keine Info"
                FachStunde4 = "Keine Info"
                DozentStunde1 = "Keine Info"
                DozentStunde2 = "Keine Info"
                DozentStunde3 = "Keine Info"
                DozentStunde4 = "Keine Info"
        }
        const stundenplanembed = new EmbedBuilder()
            .setColor(0xff7700)
            .setTitle(`Stundenplan für den ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
            .setFields(
                {
                    name: '8:30 - 10:00',
                    value: `Fach: ${FachStunde1}\nDozent: ${DozentStunde1}`,
                    inline: true
                },
                {
                    name: '10:15 - 11:45',
                    value: `Fach: ${FachStunde2}\nDozent: ${DozentStunde2}`,
                    inline: true
                },
                {
                    name: '12:45 - 14:15',
                    value: `Fach: ${FachStunde3}\nDozent: ${DozentStunde3}`,
                    inline: true
                },
                {
                    name: '14:30 - 16:00',
                    value: `Fach: ${FachStunde4}\nDozent: ${DozentStunde4}`,
                    inline: true
                },
            )
            .setURL("https://intern.die-fachschulen.de/")
        await interaction.reply({
            ephemeral: true,
            embeds: [stundenplanembed],

        })


    }
}