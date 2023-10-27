import {Events, GuildMember} from "discord.js";

module.exports = {
    event: Events.GuildMemberUpdate,
    async execute(member: GuildMember) {
        const guildMember = member.guild.members.cache.get(member.id)
        if(guildMember.displayName.startsWith("!")) {
            await member.setNickname(member.displayName.replace("!", ""))
        }
/*
        // Rename users with non latin names to their global name and notify them.
        if (member.displayName.match(/[^\x00-\x7F]/)) {
            member.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Nickname changed!")
                        .setDescription("Your name contained non latin letters, which makes it hard to tag you, therefor your display name on Stormy Waves has been changed to your username." +
                            "\nYou can change your display name on Stormy Waves yourself as long as it doesn't contain non latin letters.")
                        .addFields([
                            {
                                name: "Old Name",
                                value: member.displayName
                            },
                            {
                                name: "New Name",
                                value: member.user.globalName
                            }
                        ])
                ]
            })

            member.setNickname(member.user.globalName)
        }*/
    }
}