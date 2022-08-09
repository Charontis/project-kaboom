// Not Another Minecraft Bot v1.6.2 by - Another -#6363
// Last Update: 09/01/2019
// https://github.com/AnotherGuy19/not-another-minecraft-bot

// Not Another Minecraft Bot is a unique custom-coded Minecraft bot for Anarchy servers!
// Hello! It is your first time viewing my bot source code, huh?
// Let's get this straight in, shall we?
// defaultMaxListeners is a thing that 
const events = require('events').EventEmitter.defaultMaxListeners = Infinity;

// Now hold up! What this module is? This is a module from Discord! If you don't know what Discord is, go check it out!
// https://www.npmjs.com/package/discord.js
const Discord = require('discord.js');

// Important module for Minecraft bot! Don't forget about it! 
// https://www.npmjs.com/package/mineflayer
const mineflayer = require('mineflayer');

// You almost know what this does, right? This is a module that we used on the chat function! It can reduce the spam usage!
// https://www.npmjs.com/package/mineflayer
const sleep = require('system-sleep');

// Request is a simple HTTP module that calls for a website response! If you don't know what that is! Check it out!
// https://www.npmjs.com/package/request
const request = require('request');

// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
// https://npmjs.com/package/fs
const fs = require('fs');

// This is a prefix system! It requires fs from Node.js! If you don't know what that is! Check that out!
// https://npmjs.com/package/fs
const coins = fs.readFileSync('./settings/coins.json', 'UTF-8')
const prefix = fs.readFileSync('./settings/prefix.json', 'UTF-8')
const experience = fs.readFileSync('./settings/experience.json', 'UTF-8')

// This is from Discord.js module! If you don't know what it is, check the line above!
// https://https://discord.js.org/#/
const client = new Discord.Client();

// Alright! Time to get work! Huh? Let's do with the Minecraft bot first!
// https://www.npmjs.com/package/mineflayer
const bot = mineflayer.createBot({
  // Don't know the server IP? You can search the number IP address by searching on https://https://mcsrvstat.us/
  host: 'play.kaboom.pw',
  // Server port settings! For Java Edition the default port is 25565! For Bedrock Edition the default port is 19132!
  port: '25565',
  // Your bot username here! Just don't type longer than 16 words!
  username: '§e§9§2§4§f',
  // Not premium account? You can simplely write two // before the password!
  // password: "",
  // Available protocol version: 1.9 1.10 1.10.2 1.11 1.11.2 1.12 1.12.1 1.12.2 choose one of them!
  // Don't know server version? Type false to use auto version selector!
  // version: false
  version: '1.12.2'
});

// Hey! You just finished the first part! Good job!
// Now lets continue, shall we? Cause why not!

// This is from Discord.js module! If you don't know what it is, check the line above!
// https://https://discord.js.org/#/
// 'message' is a function! It will also work until there is a ending!
client.on('message', message => {
	// What is this? If else statement! If you already knew what it is, skip it!
	// How can i get my discord ID? You can get it by enabling Developer mode!
	// https://discordia.me/developer-mode
	if (message.author.id == '430725926989332480') return null;	

	// Channel lookup id if else statement! If you already knew skip it!
	// How can i get a channel ID? You can get it by enabling Developer mode!
	// https://discordia.me/developer-mode
	if (message.channel.id !== '608295628711133211') return null;

	// What is this? It will say in chat if you typed something on the channel!
	// For example; I typed A on a channel then my bot will say A!
	// Thats simple, right? Or maybe not?
	bot.chat(message.content)
});

// Alright! Now we have a list of things! In JavaScript there is
// var const let <-- if you don't know how those works check it out!
// https://tylermcginnis.com/var-let-const/

// I will use var because its better! Now I'll make a list that what users are able to use my bot commands!
// Accessable? What is that? You can change it whatever you want!
var Accessable = ['_AnotherGuy_', 'MorganAnkan', 'BlueBurgersTDD', 'The_Cosmic_', 'Agito']

// What is this? I used this to clearchat! How? Just bot.chat(X + X + X etc.)!
var X = Math.floor((Math.random() * 1000000000000000000000) + 1000000000000000000);

// This is one of my experiment function! Introducing the coin system! It is a function that allows you to get coins by chatting!
bot.on('chat', (player) => {
	// requires the coin file
	let coins = require("./settings/coins.json");
	// coins countdown system
	let coinCountdown = new Set();
	// if they are not in the .json list
    if(!coins[player]){
	// add them into the list starts with 0 balance
    coins[player] = {
    coins: 0 }};
	// coin amount basement
    let coinAmt = Math.floor(Math.random() * 7) + 10;
	// base amount backup
    let baseAmt = Math.floor(Math.random() * 7) + 10;
	// if they are equal
    if(coinAmt === baseAmt){
	// check if they have cooldown, if not
	if(!coinCountdown.has(player)){
		// add random coins in their balance
		coins[player] = {
		coins: coins[player].coins + coinAmt };
		// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
		// https://npmjs.com/package/fs
		fs.writeFile("./settings/coins.json", JSON.stringify(coins), (err) => {
			// if theres an error
			if (err) console.log(err)})
			// if not, give a cooldown to their balance
			coinCountdown.add(player)
			// timeout function
			setTimeout(function(){
			// then remove their cooldown
			coinCountdown.delete(player)
			// how many seconds (5*1000 = 5000 -> 5 seconds)
			}, 5*1000)
		}
	}
		// requires the xp file
		let xp = require("./settings/experience.json");
		// base xp given
    	let xpAdd = Math.floor(Math.random() * 500) + 1;
		// if they are not in the list
    	if(!xp[player]){
			// starts with 0 xp
			xp[player] = {
			// 0 xp with default level
        	xp: 0,
			// default level
        	level: 1 }}
				// current xp for chatting
				let curxp = xp[player].xp;
				// current level for chatting
				let curlvl = xp[player].level;
				// each next level of how many experiences
				let nxtlvl = xp[player].level * 5000;
				// they chat everytime and add random experiences
				xp[player].xp = curxp + xpAdd;
					// if their experience is higher than 5000
					if(nxtlvl <= xp[player].xp){
					// add one level
					xp[player].level = curlvl + 1;
					// broadcast
					bot.chat("/bcraw &8[&a&lLevel&8] &eCongratulations, " + player + "! You are now Lv." + Math.round(curlvl + 1) + " on the server!")}
					// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
					// https://npmjs.com/package/fs
					fs.writeFile("./settings/experience.json", JSON.stringify(xp), (err) => {
					// if error appeared, send error
					if(err) console.log(err)
					})
})

// Now important! A function that looks up if their username is on the "Accessable" list! If not, they'll be ignored!
// You can change it by editing the "Accessable" line!
// Where is username? Did i miss something? You didn't! It's from Mineflayer!
// Check it again! If you still don't know what that is, try searching on Stackoverflow!

// Please notice that this is the old function permission system!
function Permissionable(username) {
	// In JavaScript, there is do let and for! What should I use?
	// https://en.wikipedia.org/wiki/Do_while_loop
	for (let i = 0; i <= Accessable.length; i++) {
		// what is Accessable.length? It looks up if your user length is same as the player typed specific command!
		if (username == Accessable[i] && i < Accessable.length) {
			// If their username is on the admin list, they'll be accessed to use commands!
			return true;
		} else if (username == Accessable[i] && i == Accessable.length) {
			// If their username is not on the admin list, they'll be ignored!
			return true;
		} else if (username !== Accessable[i] && i == Accessable.length) {
			// If their username is on the admin list, they'll be ignored because the CAPS!
			return false;
		}
	}
}

// Bot successfully logged in or so
bot.on('login', () => {
	// This is a module that froms system-sleep! If you don't know what it is; check it out!
	// https://www.npmjs.com/package/mineflayer
	sleep(2500)
	// Bot will say something if it was successfully logged in!
	bot.chat('Not Another Minecraft Bot 1.6.4 is a unique custom-coded Minecraft bot for Anarchy servers!')
	bot.chat('Not Another Minecraft Bot 1.6.4 is now OPEN SOURCE!')
	// This is a module that froms system-sleep! If you don't know what it is; check it out!
	// https://www.npmjs.com/package/mineflayer
	sleep(2500)
	// Bot will say something if it was successfully logged in!
	// you know... Anarchy servers... free op, right? so ill used /v! it stands for vanish!
	bot.chat('/v')
	sleep(2500)
	// The bot will stay in a flying status on somewhere!
	// I don't know where it will go either!
	bot.creative.startFlying();
})

// if an player joined on the server
bot.on('playerJoined', (player) => {
	// How can i get a channel ID? You can get it by enabling Developer mode!
	// This is from Discord.js module! If you don't know what it is, check the line above!
	// https://https://discord.js.org/#/
	// Important module for Minecraft bot! Don't forget about it! 
	// https://www.npmjs.com/package/mineflayer
	client.channels.get('608295668833976320').send('[#**' + bot.time.day % 24000 + '**] `' + player.username + '` joined the game (`' + player.uuid + '`)');
  })

// if an player left on the server
bot.on('playerLeft', (player) => {
	// How can i get a channel ID? You can get it by enabling Developer mode!
	// This is from Discord.js module! If you don't know what it is, check the line above!
	// https://https://discord.js.org/#/
	// Important module for Minecraft bot! Don't forget about it! 
	// https://www.npmjs.com/package/mineflayer
	client.channels.get('608295668833976320').send('[#**' + bot.time.day % 24000 + '**] `' + player.username + '` left the game (`' + player.uuid + '`)');
})

// if the bot is death, it will run the functions below
bot.on('death', () => {
	client.channels.get('608295628711133211').send('[#**' + bot.time.day % 24000 + '**] **[**:skull:**]** I have died on the server... ;(');
});

// Change Prefix function! This is one of my experiment function! If you want to use it, then use it!
function changePrefix(newPrefix) {
	// This requires fs from Node.js! If you don't know what that is! Check that out!
	// https://npmjs.com/package/fs
	fs.writeFileSync("./settings/prefix.json", `${newPrefix}`, "utf-8") // utf-8 format fixed
	// bot chat
	bot.chat("/bcraw &8[&a&lPrefix&8] &eSuccess! I have changed my prefix to &b" + newPrefix + " &eon the server!&f")
	// wait 2.5s
	sleep(2500)
	// enable exit state with code 1
	process.exit(1)
}

// This is one of my experiment function! It is a function that allows to create bots to a server!
function addClient(username, version, limit) { 
	// if the quantity is more than 11 it'll be ignored!
	if (limit > 11) {
		bot.chat("&8[&c&lBot Alts&8] &eYou can only use 11 bots at the moment!&f")
	}
			// for loops; it will generate a number from 0 to a number that you set in the quantity!
			for (i = 1; i < limit; i++) {
			// Creates bot
			var bots = mineflayer.createBot({
			// server ip address
			host: "play.kaboom.pw",
			// server port address
			port: 53950,
			// Available protocol version: 1.9 1.10 1.10.2 1.11 1.11.2 1.12 1.12.1 1.12.2 choose one of them!
			version: version,
			// the one that you typed on the chat!
			username: '[' + i + '] ' + username,
			// check if the server is timed out, if so the bot will disconnect itself
			checkTimeoutInterval: 60 * 10000
			}
		)
	}
}

// If the bot successfully receieves messages on chat! The functions will work!
// Check their player name and what message
bot.on('chat', (player, message) => {
	// Request is a simple HTTP module that calls for a website response! If you don't know what that is! Check it out!
	// https://www.npmjs.com/package/request
	request("https://mcapi.us/server/status?ip=kaboom.pw", function(err, response, server) {
			// if there is error
			if(err) {
				// it will print error
				console.log(err);
			};    
			// if it callback online
            if(server.online) {
				// This is from Discord.js module! If you don't know what it is, check the line above!
				// https://https://discord.js.org/#/
				client.user.setPresence({ game: { name: server.players.now + '/' + server.players.max + ' players on the server!', type: "watching" }});
		}
		// if it doesnt callback online
	// This is from Discord.js module! If you don't know what it is, check the line above!
	// https://https://discord.js.org/#/
	else client.user.setPresence({ game: { name: 'movies and waiting for the server to come back online!', type: "watching" }});
	})
})

// Why separate them? Because it will not work if I merged them!
// check their username and what message
bot.on('chat', (username, message) => {
	// if their message is same as the one below it will run
	if (message == `${prefix}` + "bad") {
		// if they are in admin list it'll be ignored
		if (Permissionable(username)) return bot.chat("/bcraw &8[&c&lBad Boy&8] &eI can't punish " + username + " on the server!")
		// if not it'll continue
		bot.chat('/fly ' + username + ' disable')
		// wait 1.5s x6
		sleep(1500)
		bot.chat('/god ' + username + ' disable')
		sleep(1500)
		bot.chat('/mute ' + username)
		sleep(1500)
		bot.chat('/minecraft:deop ' + username)
		sleep(1500)
		bot.chat('/minecraft:gamemode adventure ' + username)
		sleep(1500)
		// this is a bcraw command that kicks 1.7 clients! If you don't know what it is; check it out
		// https://bugs.mojang.com/browse/MC-81319
		bot.chat('/minecraft:bcraw ' + username + ' {"translate":"translation.test.invalid"}')
		sleep(1500)
		// this is a new bcraw commands works above 1.9! if u dont know either check it out
		// https://www.youtube.com/watch?v=Q_QwTYV6Vo4
		bot.chat('/minecraft:bcraw ' + username + ' ["",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"},"",{"selector":"@e"}]')
		sleep(1500)
		bot.chat("/bcraw &8[&a&lBad Boy&8] &eYou're being a naughty, naughty boy!")
	}
})

// This is one of my experiment function! We called it eval command!
// If you don't know what eval is, check it out!
// https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md
bot.on('chat', (player, msg) => {
	// lookup player name and message contents
	let cmd = msg.split('')[0].toLowerCase();
	// input is required on eval function
	let input = msg.slice(cmd.length).trim();
	// eval command prefix, change it if you want!
	if (cmd === '>') {
		// disabled command, edit it if you want!
		if (msg.includes(">eval")) return false;
		if (msg.includes(">process")) return false;
		if (msg.includes(">bot.end")) return false;
		if (msg.includes(">bot.quit")) return false;
//		if (msg.includes(">addClient")) return bot.chat("/bcraw &8[&a&lBot Alts&8] &e> addClient('USERNAME', 'VERSION', 'QUANTITY')")
//		if (msg.includes(">changePrefix")) return bot.chat("/bcraw &8[&a&lPrefix&8] &e> changePrefix('BOT PREFIX')")
		if (msg.includes("> eval")) return false;
		if (msg.includes("> process")) return false;
		if (msg.includes("> bot.end")) return false;
		if (msg.includes("> bot.quit")) return false;
//		if (msg.includes("> addClient")) return bot.chat("/bcraw &8[&a&lBot Alts&8] &e> addClient('USERNAME', 'VERSION', 'QUANTITY')")
//		if (msg.includes("> changePrefix")) return bot.chat("/bcraw &8[&a&lPrefix&8] &e> changePrefix('BOT PREFIX')")
		// check if their username is on the admin list
		if (Permissionable(player)) {
		// if so, continue
			try {
				bot.chat(`&a> ${eval(input)}`);
			}
			// if an error appeared
			catch (error) {
				// sent error on chat
				bot.chat(`&a> ${error}`);
			}
		}
	}
});



// This is one of my experiment function! We called it eval command but in DISCORD!
// If you don't know what eval is, check it out!
// https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md
client.on('message', message => {
	// lookup if the channel is the correct ID
	if (message.channel.id !== '617983073534869505') return false;
	// lookup if the username is the bot ID
	if (message.author.id == '430725926989332480') return false;
	// corrects to String prevent unreadable
	let msg = message.content.toString();
	// lookup player name and message contents
	let cmd = msg.split('')[0].toLowerCase();
	// input is required on eval function
	let input = msg.slice(cmd.length).trim();
	// eval command prefix, change it if you want!
	if (cmd === '>') {
	// disabled command, edit it if you want!
		if (msg.includes(">eval")) return false;
		if (msg.includes(">process")) return false;
		if (msg.includes(">bot.end")) return false;
		if (msg.includes(">bot.quit")) return false;
		if (msg.includes(">addClient")) return false;
		if (msg.includes(">changePrefix")) return false;
		if (msg.includes("> eval")) return false;
		if (msg.includes("> process")) return false;
		if (msg.includes("> bot.end")) return false;
		if (msg.includes("> bot.quit")) return false;
		if (msg.includes(">addClient")) return false;
		if (msg.includes("> changePrefix")) return false;
		// if (msg.includes(`>client`)) return false;
		// if (msg.includes(`> client`)) return false;
		// check if the channel ID is correct
		if (message.channel.id == '617983073534869505') {
		// if so, continue
		try {
			client.channels.get('617983073534869505').send(`> ${eval(input)}`)
		// if an error appeared
		} catch (error) {
			// send error on the channel
			client.channels.get('612982562255798272').send(`> ${error}`)
		}
	}
 }});

// Introducing new javascript function! Switch statement! It's easier than the previous one!
// If you don't know what it is, check it out!
// https://www.w3schools.com/js/js_switch.asp
bot.on('chat', (username, message) => {
	// check their username and message content
	switch (message) {
	case `${prefix}` + 'help':
	// simple help command but TOO confusing! ;P
	bot.chat("/bcraw &8&m-----------------------------------------------------")
	sleep(1500)
	bot.chat("/bcraw &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &dNot &3Another &2Minecraft &9Bot &fv1.6.2")
	sleep(1500)
	bot.chat("/bcraw &8 &8 &8 &8 &8 &8 &8 &8 &8 &8 &fYou can see the &aavailable commands &fthat I know!")
	sleep(1500)
	bot.chat("/bcraw &8 &8 &8 &8 &8 &8 &8 &8 &fContact &6- Another -#6363 &fif you are having issues!")
	sleep(1500)
	bot.chat("/bcraw &8&m-----------------------------------------------------")
	sleep(1500)
	break
	// simple quit function command, but kinda buggy... ;O
	case `${prefix}` + 'quit':
	if (Permissionable(username)) {
	// wait 5s
	sleep(5000)
	// bot quit from server
	bot.end()
	process.exit(1)}
	else {
	bot.chat("/bcraw &8[&c&lQuit&8] &eYou do not have permission to use this command!")
	}
	// break = end
    break
	case `${prefix}` + 'clear':
	// please notice that this command is kinda buggy and is W.I.P and might be removed soon!!
	if (Permissionable(username)) {
	bot.chat("/bcraw &8[&a&lClear Chat&8] &eClearing the chat in 10 seconds...")
	sleep(10000)
	// spam a number that generated from the var X
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// wait 1s
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// and so on...
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// god end this pls
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// idk stop plz
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// my eyes
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// i hate those numbers
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// JUST STOP PLZ
	sleep(1000)
	bot.chat('&f' + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X + X)
	// finally!
	sleep(1000)} else {
		bot.chat("/bcraw &8[&c&lClear Chat&8] &eYou do not have permission to use this command!")
	}
    break
	// default statement, if the message is not in the list, it'll do the following functions!
	default:
	null
	// prints out what username is talking about
	// console.log(username + ' » ' + message);
	// How can i get a channel ID? You can get it by enabling Developer mode!
	// This is from Discord.js module! If you don't know what it is, check the line above!
	// https://https://discord.js.org/#/
	// Important module for Minecraft bot! Don't forget about it! 
	// https://www.npmjs.com/package/mineflayer
}})


// msg.toString feature approved version, message function
bot.on('message', (msg) => {
	console.log(msg.toString())
	client.channels.get('608295628711133211').send('[#**' + bot.time.day % 24000 + '**] ' + msg.toString())
});


// if the bot got disconnected from the server, it will execute the function below!
bot.on('kicked', (reason) => {
	client.channels.get('608295668833976320').send('[#**' + bot.time.day % 24000 + '**] **[**:x:**]** ' + 'I have been disconnected for: ' + reason)
    process.exit(1)
})

// Paste your Discord bot token here! If you don't know where, check it out!
// https://discordapp.com/developers/applications/
client.login(process.env.token);