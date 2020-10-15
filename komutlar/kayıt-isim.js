const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
  
//------------------------------------------------ROL-KANAL-EMOJİ-----------------------------------------------\\       STG   
  
  const log = message.guild.channels.find(c => c.id === "757669875434127421"); 
  const tag = "ゃ"; // <---- TAG KISMI
  const dogrulandi = client.emojis.find(emoji => emoji.name === "rgbefekt");
  if(!message.member.roles.array().filter(r => r.id === "757642199948066836")[0]) { 
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    
//------------------------------------------------ROL-KANAL-EMOJİ-----------------------------------------------\\       STG      
    
    
    
    
    
    
    
    
    
    
//------------------------------------------------İŞLEM-----------------------------------------------\\       STG    
    
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.setNickname(`${tag} ${nick} | ${yas}`)
    
//------------------------------------------------İŞLEM-----------------------------------------------\\       STG       
    
    
    
    
    
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\       STG
    
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**<@${c.user.id}>** kişinin yeni adı **${tag} ${nick} | ${yas} !**`)
    .setColor("0x5656cc")
    log.send(embed)
    message.react(dogrulandi)
    
//------------------------------------------------MESAJ-----------------------------------------------\\       STG
    
    
    
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "nick"],
  permLevel: 0
};
exports.help = {
  name: "nick", 
  name: "isim",
  description: "",
  usage: ""
};
   