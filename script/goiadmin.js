module.exports.config = {
	name: "goiadminn",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will rep the tag admin or rep the tagbot",
	usages: "",
	hasPrefix: true,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {
	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"Just call him babe",
					"Stop mentioning my creator, he's busy 😗",
					"My Creator is currently offline 😢",
					"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 𝗂𝗇 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇, 𝗂 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 🙂",
					"It's still busy so wait",
					"Sorry, he's still on betime, don't disturb him 🙄",
					"Do you like my creator thats why your tagging him? Why dont you add him https://www.facebook.com/yukinori69 😏",
					"Another tag in my Creator, i will kick your fucking ass"
				];
				api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ admin }) {
};
