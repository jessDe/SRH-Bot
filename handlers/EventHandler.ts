import { loadFiles } from '../util/FileLoader';
import {Client} from "discord.js";
import * as path from "path";

export async function loadEvents(client: Client): Promise<void> {
    // @ts-ignore
    client.events = new Map<string, (...args: any[]) => void>();
    const events: { Event: string; Status: string; }[] = [];

    let files: string[] = await loadFiles('events');

    for (const file of files) {
        try {
            const event = require(file);
            const exec = (...args: any[]) => event.execute(...args, client);
            const target = event.rest ? client.rest : client;

            // @ts-ignore
            target[event.once ? "once" : "on"](event.event, exec);
            // @ts-ignore
            client.events.set(event.event, exec);

            events.push({ Event: path.basename(file, path.extname(file)).replace(/([A-Z])/g, ' $1').trim(), Status: '🟩' });
        } catch (error) {
            events.push({ Event: file.split('/').pop().slice(0, -3), Status: '🔴' });
        }
    }

    console.table(events, ["Event", "Status"]);
}