import {ChatInputCommandInteraction, Client, PermissionsBitField, SlashCommandBuilder} from "discord.js";
import {loadEvents} from "../../handlers/EventHandler";
import {loadCommands} from "../../handlers/CommandHandler";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zeitübrig")
        .setDescription("Gibt die verbleibende Zeit des heutigen Tages!"),

    async execute(interaction: ChatInputCommandInteraction, client: Client) {
        var date = new Date();
        var stunden = 0;
        var minuten = 0;


        switch (date.getDate()){
            case 11:
                stunden = 16
                minuten = 0
                break
            case 12:
                stunden = 16
                minuten = 0
                break
            case 13:
                stunden = 16
                minuten = 0
                break
        }
        var curmin = date.getMinutes();
        var curhour = date.getHours();

        var lefthours = stunden - curhour;
        var leftmin = minuten - curmin;

        if(lefthours > 0 && leftmin < 0){
            leftmin = 60 + leftmin;
        }


        if (lefthours == 0 && leftmin < 0){
            if(interaction != null){
                await interaction.reply({
                    content: `Die Schule ist für heute bereits um!`,
                    ephemeral: true,
                })
            }

            return;
        }else if(lefthours >= 0){
            if(interaction != null){
                await interaction.reply({
                    content: `Die verbleibende Zeit ist ${lefthours-1} Stunden und ${leftmin} Minuten!`,
                    ephemeral: true,
                })
                return
            }

        }else{
            if(interaction != null){
                await interaction.reply({
                    content: `Die Schule ist für heute bereits um!`,
                    ephemeral: true,
                })
                return
            }

        }


    }
}