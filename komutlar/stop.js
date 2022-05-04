const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyBTW0jnA023NBduCrds0Wz4PRwOOmDuQxI");

exports.run = async (client, message, args) => {
  const queue = client.queue;

  var searchString = args.slice(0).join(" ");
  var url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
  var serverQueue = queue.get(message.guild.id);

  var voiceChannel = message.member.voiceChannel;

  const a = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/963723150426796042/970425178985234502/20220428_124053.gif"
    )
    .setDescription(
      `:x: **You have to be in a voice channel to use this command.**`
    );
  if (!voiceChannel) return message.channel.send(a);

  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    const asjdhsaasjdhaadssad = new RichEmbed()
      .setColor("#C500F7")
      .setImage(
        "https://media.discordapp.net/attachments/963723150426796042/970425178985234502/20220428_124053.gif"
      )
      .setDescription(`Paused :pause_button:`);
    return message.channel.send(asjdhsaasjdhaadssad);
  }
  const b = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/963723150426796042/970425178985234502/20220428_124053.gif"
    )
    .setDescription(`:x: There's no song playing right now.`);
  if (!serverQueue) return message.channel.send(b);
};

exports.conf = {
  enabled: true,
  aliases: ["s"],
  permLevel: 0,
};

exports.help = {
  name: "stop",
  description: "Çalan şarkıyı duraklatır.",
  usage: "duraklat",
};
