import {AttachmentBuilder, Client, EmbedBuilder, TextChannel} from "discord.js";
import * as http from "http";

export default (client: Client) => {
    let channel = client.channels.cache.get("1161230173685952522") as TextChannel


    let Fach: string;
    let Dozent: string;
    let Zeit: string;
    let Type: string;
    let anderung: string;
    const server = http.createServer(async (req, res) => {
        if (req.method === 'POST') {
            Fach = req.headers['fach'].toString()
            Dozent = req.headers['dozent'].toString()
            Zeit = req.headers['zeit'].toString()
            Type = req.headers['type'].toString()
            anderung = req.headers['anderung'].toString()
            let color = 0;

            switch (Type) {
                case "Entfall":
                    color = 0xed4245
                    break;
                case "Online":
                    color = 0x3498db
                    break;
                case "Hausaufgaben":
                    color = 0xffff00
                    break;
            }

            const notificationEmbed = new EmbedBuilder()
                .setColor(color)
                .setTitle(`Status der Stunde ${Zeit} wurde auf ${Type} geändert!`)
                .addFields(
                    {
                        name: 'Fach',
                        value: Fach,
                        inline: true
                    },
                    {
                        name: 'Dozent',
                        value: Dozent,
                        inline: true
                    },
                    {
                        name: 'Änderung',
                        value: anderung
                    },
                )
                .setTimestamp()
                .setFooter({text: 'SRH Notification'})



            await channel.send({
                embeds: [
                    notificationEmbed
                ]
            })

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('Received SRH Notification info')
        }
    })

    const port = 5678
    let host = '127.0.0.1'
    if (process.env.DEBUG === 'false') {
        host = '85.215.35.20'
    }
    server.listen(port, host)
    console.log(`SRH Notifications Service running at http://${host}:${port}`)


}