const Discord = require("discord.js");

exports.run = function (client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("#c500f7")
    .setTitle("» © SHAZAM  Müzik  Komutları")
    .setTimestamp()
    .addField("» -×p- Müzik Açar", ".play")
    .addField("» -×r- Şarkıya Devam Eder", ".resum ")
    .addField("» -×s- Şarkıyı Durdurur", ".skip")
    .addField("» -×dc- Şarkıyı Kapatır", ".disconnect")
    .addField("» -×- Botun Durumunu Gösterir", ".istatislik")
    .addField("» -×sk- Şarkıyı Geçersiniz", ".stop")
    .setFooter("© SHAZAM   Müzik", client.user.avatarURL)
    .setImage(
      "https://media.discordapp.net/attachments/963723150426796042/970571478795943976/20220428_131634.gif"
    )
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "yardım", "müzik", "muzik", "mz"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  description: "Tüm komutları gösterir.",
  usage: "müzik",
};
