import { loadFiles } from '../util/FileLoader';
import {Client} from "discord.js";
import * as path from "path";

export async function loadCommands(client: Client): Promise<void> {

    // @ts-ignore
    client.commands = new Map<string, (...args: any[]) => void>();

    const commands: { Command: string; Status: string; }[] = [];
    const commandArray = []

    let files: string[] = await loadFiles('commands');

    for (const file of files) {
        try {
            const command = require(file);

            // @ts-ignore
            client.commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON())

            commands.push({ Command: path.basename(file, path.extname(file)).replace(/([A-Z])/g, ' $1').trim(), Status: '🟩' });
        } catch (error) {
            commands.push({ Command: file.split('/').pop().slice(0, -3), Status: '🔴' });
        }
    }

    await client.application.commands.set(commandArray);

    console.table(commands, ["Command", "Status"]);
}