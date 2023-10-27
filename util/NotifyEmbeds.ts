import {Client, Colors, EmbedBuilder} from "discord.js";

class Logger {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
        console.log("Logger initialized!")
    }

    info(message: string): EmbedBuilder {
        return new EmbedBuilder().setTitle("Info")
            .setColor(Colors.Blue)
            .setTimestamp()
            .setDescription(`${message}\n`)
    }

    warning(message: string): EmbedBuilder {
        return new EmbedBuilder().setTitle("Warning")
            .setColor(Colors.Yellow)
            .setTimestamp()
            .setDescription(message)
    }

    error(message: string): EmbedBuilder {
        return new EmbedBuilder().setTitle("Error")
            .setColor(Colors.DarkRed)
            .setTimestamp()
            .setDescription(message)
    }
}

export default Logger;