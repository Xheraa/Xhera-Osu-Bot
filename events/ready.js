const { Events } = require('discord.js');
const { auth } = require('osu-api-extended');
const { osuAppId, osuClientSecret } = require('../config.json');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
        // Auth via client
        await auth.login_lazer(osuAppId, osuClientSecret);
        console.log(`Logged into osu! API as Xhera`);
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};