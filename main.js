const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setActivity('Faire un TUTO')
    console.log('Bot connecté !')
})

bot.login('NDczMDU3MjUzNjc5NjkzODQ0.Dj8Ykw.SuSjsapR3n9_zhw0Osu7nYUYMtM'); // Le token a été reset ^^ 

bot.on('message', message => {
    var prefix = "!";
    if (message.content.startsWith(prefix + "ping")) {
        message.delete()
        message.channel.send(`Ping du bot ${Date.now() - message.createdTimestamp} ms`)
    }
var args = message.content.split(' ').slice(1);
if (message.content.startsWith(prefix + "say")) {
    message.channel.send('Voici le message que ' + message.author.username + " a écrit : " + args.slice(' ').join(' '))
}

if (message.content.startsWith(prefix + "premier-mot")) {
    message.channel.send('Voici le premier mot que ' + message.author.username + " a écrit : " + args[0])
}

if (message.content.startsWith(prefix + "help")) {
    message.delete()
    let embed = new Discord.RichEmbed()
    .setTitle('Voici les différentes commandes sur le serveur :')
    .setDescription('Commande /say "message" \nEcrit le message après la commande.\n\nCommande /premier-mot "texte\nEcrit le premier mot après la commande\n\n/ping\nPermet de voir la lantence du bot') // "\n" = retour à la ligne  | \n\n = deux retour à la ligne
    .setFooter('Bot tuto')
    message.channel.send(embed)
}

if (message.content.startsWith(prefix + "embed")) {
    var embed = new Discord.RichEmbed()
    .setTitle('Titre')
    .setDescription('Description')
    .addField('Petit colonne', "Deuxième ligne")
    .setColor('#42f45c') // Couleur
    .setImage('https://images-ext-2.discordapp.net/external/Ep1V_LF6y5Obo84hteBi1hzmfeS9Tlc-ht7u2I1AcBA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/473057253679693844/c2eb10d1fd8ca4ac2be54beed6894bd7.png?width=676&height=676') // grande image
    .setThumbnail('https://images-ext-2.discordapp.net/external/Ep1V_LF6y5Obo84hteBi1hzmfeS9Tlc-ht7u2I1AcBA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/473057253679693844/c2eb10d1fd8ca4ac2be54beed6894bd7.png?width=676&height=676') // Petit image
    .setFooter('Petit message')
    message.channel.send(embed)
}
// Si vous souhaitez une suite pour d'autres commandes et cours n'hésitez pas à me le dire dans les commentaires ;)

})

