const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663324359527628800")
setInterval(function() {
channel.send(`لسا مزهقتش ؟ ولا عمرك عتزهق`);
}, 30)
})

client.login(process.env.BOT_TOKEN);