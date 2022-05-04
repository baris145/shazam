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

  const err1 = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/963723150426796042/970425149276966982/20220428_135604.gif"
    )
    .setDescription(
      `:x: **You have to be in a voice channel to use this command.**`
    );
  if (!voiceChannel) return message.channel.send(err1);
  const err2 = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/968925558316621830/969190345881571348/20220428_135604.gif"
    )
    .setDescription(`:x: There's no song playing right now.`);
  if (!serverQueue) return message.channel.send(err2);
  serverQueue.songs = [];
  const songEnd = new RichEmbed()
    .setColor("#C500F7")
    .setImage(
      "https://media.discordapp.net/attachments/968925558316621830/969190345881571348/20220428_135604.gif"
    )
    .setDescription(`:mailbox_with_no_mail: Successfully disconnected`);
  serverQueue.connection.dispatcher.end("");
  message.channel.send(songEnd);
};

exports.conf = {
  enabled: true,
  aliases: ["dc"],
  permLevel: 0,
};

exports.help = {
  name: "disconnect",
  description: "Botu Kanaldan Çıkartır ve Şarkıyı Kapatır.",
  usage: "botçık",
};
