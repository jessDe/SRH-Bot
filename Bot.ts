import {Client, Partials, Collection} from "discord.js";
import {loadEvents} from "./handlers/EventHandler";
import VersionCheckerService from "./features/VersionCheckerService";
import {loadCommands} from "./handlers/CommandHandler";
import Logger from "./util/NotifyEmbeds";
import 'dotenv/config';



const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages',
        'GuildMembers',
        'GuildModeration',
        'GuildBans',
        'DirectMessages',
        'MessageContent',
    ],
    partials: [
        Partials.User,
        Partials.GuildMember,
        Partials.Channel,
        Partials.ThreadMember,
        Partials.Message,
    ]
});

// Initialize embed logger
export const logger = new Logger(client)

// @ts-ignore
client.events = new Collection()
// @ts-ignore
client.commands = new Collection()

client.login(process.env.TOKEN).then(async () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('GME-2023')
    await loadEvents(client)
    await loadCommands(client)
    VersionCheckerService(client)
});