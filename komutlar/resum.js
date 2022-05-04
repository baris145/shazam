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
      "https://media.discordapp.net/attachments/963723150426796042/970425036722810920/after-effects-audio-spectrum-with-color-bar-1.gif"
    )
    .setDescription(
      `:x: **You have to be in a voice channel to use this command.**`
    );
  if (!voiceChannel) return message.channel.send(a);

  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    const asjdhsaasjdhaadssad = new RichEmbed()
      .setColor("#C500F7")
      .setImage(
        "https://media.discordapp.net/attachments/963723150426796042/970425036722810920/after-effects-audio-spectrum-with-color-bar-1.gif"
      )
      .setDescription(`:play_pause: Resuming :thumbsup:`);
    return message.channel.send(asjdhsaasjdhaadssad);
  }
  const b = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/963723150426796042/970425036722810920/after-effects-audio-spectrum-with-color-bar-1.gif"
    )
    .setDescription(`:x: There's no song playing right now.`);
  if (!serverQueue) return message.channel.send(b);
};

exports.conf = {
  enabled: true,
  aliases: ["r"],
  permLevel: 0,
};

exports.help = {
  name: "resum",
  description: "Duraklatılmış şarkıyı devam ettirir.",
  usage: "devamet",
};
