const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = (client) => {
  var oyun = [
    "×p 🎧 İstediğin şarkıyı çalar.",
    "×st ▶️ Müziği durdurur.",
    "×r ▶️ Müziği devam ettirir.",
    "×sk ⏭ Çalınan müziği geçer.",
    "×dc 🎧 Bot Kanaldan Ayrılır.",
    "×y 🎵 ×yardım 🎵 ×help 🎵.",
    "SLAYER'♥️'TARAFINDAN'♥️'YAPILMISTIR.",
  ];

  setInterval(function () {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setGame(oyun[random]);
  }, 5 * 2500);

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  client.user.setGame(
    `${prefix}help + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Oyun ismi ayarlandı!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
};
