const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('0xf0cdcd')
      .setTitle('**Striga Register Yardım Paneli**')
      .addField('__**İsim**__', `  \`${prefix}isim @etiket İsim Yaş\``) 
    .addField('__**Erkek**__', `  \`${prefix}erkek @etiket\``) 
    .addField('__**Erkek**__', `  \`${prefix}kadın @etiket\``) 
    .addField('__**Sohbet Aç**__', `  \`${prefix}sohbet-aç\``) 
    .addField('__**Sohbet Kapat**__', `  \`${prefix}sohbet-kapat\``) 
    .addField('__**Tag Duyuru**__', `  \`${prefix}tagduyuru mesajınız\``) 
    message.channel.send(embedyardim).catch()
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};
  
exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};  