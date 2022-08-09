// --------------------------------------------------------------------------------------------------------------------------
//
// Stardust v1.2.7
// 
// ---------------------------------------------------------------------------------------------------------------------------
//
// Stardust is a one of a Vocalid character which is one of my favourite!
// Therefore, I decided to make a bot for my waifu! <3
//
// ---------------------------------------------------------------------------------------------------------------------------
//
// Lines starting with "//", "/*", or "#" are ingored by the code. They are called remarks just to remind!
//
// ---------------------------------------------------------------------------------------------------------------------------
//
// Hello! It is your first time viewing my bot source code, huh?
// Let's get this straight in, shall we?
//
// ---------------------------------------------------------------------------------------------------------------------------

// Now hold up! What this module is? This is a module from Discord! If you don't know what Discord is, go check it out!
// https://www.npmjs.com/package/discord.js
const Discord = require('discord.js');

// os is downloaded by Node.js! You don't have to download it again!
// https://npmjs.com/package/os
const os = require('os')

// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
// https://npmjs.com/package/fs
const fs = require('fs');

// snekfetch is a simple module and it's useful! It is also required to the bot!
// https://npmjs.com/package/snekfetch
const snekfetch = require('snekfetch')

// This is a prefix system! It requires fs from Node.js! If you don't know what that is! Check that out!
// https://npmjs.com/package/fs
const data = fs.readFileSync('./settings/debug.json', 'UTF-8')
const prefix = fs.readFileSync('./settings/prefix.json', 'UTF-8')
const configuration = fs.readFileSync('./settings/configuration.json', 'UTF-8')

// You almost know what this does, right? This is a module that we used on the chat function! It can reduce the spam usage!
// https://www.npmjs.com/package/system-sleep
const sleep = require('system-sleep');

// Cool module for knowing the CPU and other stuff! Check it out!
// https://www.npmjs.com/package/systeminformation
const system = require('systeminformation')

// Request is a simple HTTP module that calls for a website response! If you don't know what that is! Check it out!
// https://www.npmjs.com/package/request
const request = require('request');

// I made a cool feature called Auto Reply Bot feature!
// https://www.npmjs.com/package/cleverbot
const cleverbot = require('cleverbot.io')

// Auto walk module for Minecraft bot! Why don't you check it?
// https://www.npmjs.com/package/mineflayer-navigate
const nevigate = require('mineflayer-navigate')

// Important module for Minecraft bot! Don't forget about it! 
// https://www.npmjs.com/package/mineflayer
const mineflayer = require('mineflayer');

// Time-stamp fixed module, use it if you want!
// https://www.npmjs.com/package/time-stamp
const timestamp = require('time-stamp');

// Webhook for Discord client! Why not?
// https://www.npmjs.com/package/webhook-discord
const webhook = require('webhook-discord');

// This is from Discord.js module! If you don't know what it is, check the link below!
// https://https://discord.js.org/#/
const client = new Discord.Client();

// Admin list, edit it if you want
// keep in mind that those users below can access all the commands that bot has!
const Accessable = ['AnotherGuy19', 'MorganAnkan', 'BlueBurgersTDD', 'The_Cosmic_']

// bot settings, edit it if you want
// keep in mind that ur bot used this option!

// --------------------------------------------------------------------------------------------------------------------------

// This is the starting bot command which is for starting the bot!
// If its not working you can clearly see in the Console Log
// http://github.com/AnotherGuy19/stardust-discord-bot
const bot = mineflayer.createBot({
	// first step is the server ip address
	// Don't know the server IP? You can search the number IP address by searching on https://https://mcsrvstat.us/
	// host: 'free5.freemc.host',
	host: 'play.kaboom.pw',
	// Server port settings! For Java Edition the default port is 25565! For Bedrock Edition the default port is 19132!
	// port: '32879',
	port: '25565',
	// Your bot username here! Just don't type longer than 16 words!
	username: '§§§§§§§§§§§§§§',
	// Available protocol version: 1.9 1.10 1.10.2 1.11 1.11.2 1.12 1.12.1 1.12.2 choose one of them!
	// Don't know server version? Type false to use auto version selector!
	version: '1.12.2'
});

// Bot successfully logged in or so
bot.on('login', () => {
	// used vanish if the bot has perms
	bot.chat("/v")
	// wait delay
	sleep(1200)
	bot.chat('/prefix &9&lS&5&lD')
	// command delay
	sleep(1200)
	// introducing itself with version
	//bot.chat("Type &a" + prefix + "help &ffor a list of available commands!")
	sleep(1200)
	// gamemode spectator
	bot.chat("/gmsp")
	// The bot will stay in a flying status on somewhere!
	bot.creative.startFlying();
	xp = require('./settings/experience.json', 'UTF-8')
	coins = require('./settings/coins.json', 'UTF-8')
})

// discord client is ready and logged in
client.on('ready', () => { // If this is ready
console.log("\n\n\n\n\n               Vocaloid - Stardust                \n\nOS » " + os.platform + "\nPrefix » " + prefix + "\nUsers » " + client.users.size + "\nServers » " + client.guilds.size + "\nPort » 25565\nProtocol » " + bot.protocolVersion + "\nVersion » " + bot.version + "\nType » " + os.type + "\nMajor Version » " + bot.majorVersion  + "\nCommand Delay » 1200\nClient » " + client.user.tag + "\nID » " + client.user.id + "\nUptime » " + os.uptime + "\nTotal Memory » " + os.totalmem + "\nUsername » " + bot.username)
}) // finish output, looking for next step

client.on('message', (msg) => {
	if (!msg.guild) return msg.author.send("**[**:x:**]** Direct Message(s) is/are disabled!"); // if they are using DM, send the message error
	if (msg.author.bot || !msg.content.startsWith(prefix)) return null; // If it is a bot or it starts without the prefix ignored
	const args = msg.content.slice(prefix.length).split(' ') // Prefix information
	const commands = args.shift().toLowerCase(); // Prefix lowercase settings
	try { // command handler, edit it if you want (experimental)
		delete require.cache[require.resolve('./commands/' + commands + '.js')]; // where the command files should be
		const folder = require('./commands/' + commands + '.js'); // commandfile load bootup
		folder.run(client, msg, args); // folder startup parements
		} // end of command handler
	catch (error) { // if catches error
		console.log(error) // send error
	} // finish output
})

// Hey! You just finished the first part! Good job!
// Now lets continue, shall we? Cause why not!

// This is from Discord.js module! If you don't know what it is, check the line above!
// https://https://discord.js.org/#/
// 'message' is a function! It will also work until there is a ending!
client.on('message', message => {
	// What is this? If else statement! If you already knew what it is, skip it!
	// How can i get my discord ID? You can get it by enabling Developer mode!
	// https://discordia.me/developer-mode
	// anti bot repeat spam
	if (message.author.id == '430725926989332480') return null;	

	// Channel lookup id if else statement! If you already knew skip it!
	// How can i get a channel ID? You can get it by enabling Developer mode!
	// https://discordia.me/developer-mode
	// get specific channel limit only
	if (message.channel.id !== '608295628711133211') return null;

	// What is this? It will say in chat if you typed something on the channel!
	// For example; I typed A on a channel then my bot will say A!
	// Thats simple, right? Or maybe not?
	bot.chat("/bcraw &9&lS&5&lD &a" + message.author.tag + " &7: &f" + message.content)
});

// This is one of my experiment function! We called it eval command but in DISCORD!
// If you don't know what eval is, check it out!
// https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md
client.on('message', message => {
	// lookup if the channel is the correct ID
	if (message.channel.id !== '617983073534869505') return false;
	// lookup if the username is the bot ID
	if (message.author.id == '430725926989332480') return false;
	// anti-spam fix if username id is their bot ID
	if (message.author.id == '621719237433622529') return false;
	// corrects to String prevent unreadable
	let msg = message.content.toString();
	// lookup player name and message contents
	let command = msg.split('')[0].toLowerCase();
	// input is required on eval function
	let input = msg.slice(command.length).trim();
	// eval command prefix, change it if you want!
	if (command == '>') {
			// disabled command, edit it if you want!
			if (msg.includes("> eval")) return false;
			if (msg.includes("> process")) return false;
			if (msg.includes("> bot.end")) return false;
			if (msg.includes("> bot.quit")) return false;
			if (msg.includes(`> client`)) return false;
			// check if the channel ID is correct
			if (message.channel.id == '617983073534869505') {
				// if so, continue
				try {
					//client.channels.get('617983073534869505').send(`> ${eval(input)}`)
				// if an error appeared
				} catch (error) {
					// send error on the channel
					//client.channels.get('617983073534869505').send(`> ${error}`)
				}
			}
		}
});

bot.on('chat', function(player, message) {
	// get command information
	let command = message.split(' ')[0].toLowerCase();
	// get permission arguments
	let input = message.slice(command.length).trim();
	// get second input
	let argsinput = message.split(" ")
	// return stringify
	if (command == '>') {
		// disabled command, edit it if you want!
		if (message.includes("fs")) return bot.chat("PermissionError: fs is not allowed.")
		if (message.includes("eval")) return bot.chat("PermissionError: eval is not allowed.")
		if (message.includes("client")) return bot.chat("PermissionError: client is not allowed.")
		if (message.includes("process")) return bot.chat("PermissionError: process is not allowed.")
		// check if their username is on the admin list
			if (Permissionable(player)) {
				// if so, continue
					try {
						bot.chat(`${eval(input)}`);
					} catch (error) {
						// sent error on chat
						bot.chat(`/bcraw &9&lS&5&lD &f: &bUnknownError: ${error}`)
					}
			}
		}

	// if their command is same as the cmd below
	if (command == `${prefix}xp`) {
		if (data.includes("experience = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lExperience&8] &cYou don't have permission to use this command.")
				if(!xp[player].level) { undefined } else {
					// the bot will say the argument
					bot.chat("&bYou are currently Lv." + xp[player].level + " &7(&3" + xp[player].xp + " &8» &3" + xp[player].level * 6500 + "&7) &bon the server!")
					// discord channel console log
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				}
		} else {
			bot.chat("&bThis command is currently disabled! Please try again later!")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}say`) {
		if (data.includes("say-command = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lMessage&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lMessage&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lMessage&8] &aYou didn't write anything... Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (input.includes(prefix)) {
							// bot.chat("/bcraw &8[&e&lMessage&8] &cYou don't have permission to use this command.")
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
						} else {
							// the bot will say the argument
							bot.chat("/bcraw &8[&e&lMessage&8] &e" + input)
							sleep(1200)
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
						}
					}
				}
		} else {
			// bot.chat("/bcraw &8[&e&lMessage&8] &bThis command has been disabled on the server.")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}bye`) {
		if (data.includes("auto-quit-command = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lAuto Quit&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lAuto Quit&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					bot.chat("/bcraw &8[&e&lAuto Quit&8] &aQuitting from the server...")
					// quit command will quit state with code 1
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					// avilable quit state 0 (auto quit), 1 (crash quit), 2 (debug quit)
					process.exit(1)
				}
		} else {
			// bot.chat("/bcraw &8[&e&lAuto Quit&8] &bThis command has been disabled on the server.")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	} 
	if (command == `${prefix}bad`) {
		if (data.includes("punish-bad-players = 'on'")) {
			// You no longer OP!
			bot.chat('/minecraft:gamemode survival ' + player)
			// cmd delay yes...
			sleep(1200)
			// permdeath helmet
			bot.chat('/replaceitem entity ' + player + ' armor.head carved_pumpkin{AttributeModifiers:[{AttributeName:"generic.maxHealth",Name:"generic.maxHealth",Amount:-69,Operation:0,UUIDLeast:388175,UUIDMost:846286}]} 1')
			// wait seconds
			sleep(1200)
			// permdeath patched, using new permdeath expolit
			bot.chat('/execute as ' + player + ' in minecraft:the_nether run tp ~ ~ ~')
			// command delay
			sleep(1200)
			// clear chat
			bot.chat('/cc')
			sleep(1200)
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		} else {
			// bot.chat("/bcraw &8[&e&lPunishing Bad Players&8] &cThis command is disabled currently. Please try again later!")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}			
	if (command == `${prefix}faq`) {
		if (data.includes("faq-command = 'on'")) {
			if (!input) {
					bot.chat("/bcraw &8[&e&lFAQ - Questions&8] &bYou didn't write anything... Maybe try again?")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (input == 'op') {
						bot.chat("/bcraw &8[&e&lFAQ - Operator&8] &aLooking for truly Anarchy server? Kaboom is the one that you're looking for.")
						sleep(1200)
						bot.chat("/bcraw &8[&e&lFAQ - Operator&8] &aYou can do whatever you want here! Why don't you have fun as well?")
						sleep(1200)
					} else {
						if (input == 'faq') {
							bot.chat('/bcraw &8[&e&lFAQ - Frequently Answers & Questions&8] &aWelcome to FAQ section! You can see the solution of the frequently questions below.')
							sleep(1200)
							bot.chat("/bcraw &8[&e&lFAQ - Frequently Answers & Questions&8] &aop faq deop help vanish anarchy commands!")
							sleep(1200)
						} else {
							if (input == 'deop') {
								bot.chat("/bcraw &8[&e&lFAQ - De-Operator&8] &aYou are de-opped? Why don't you just op yourself back then have fun?")
								sleep(1200)
								bot.chat("/bcraw &8[&e&lFAQ - De-Operator&8] &aThis is a truly anarchy server! Why don't you just do whatever you want?")
								sleep(1200)
							} else {
								if (input == 'help') {
									bot.chat("/bcraw &8[&e&lFAQ - Help&8] &aHere's the list of the server commands below.")
									sleep(1200)
									bot.chat("/bcraw &8[&e&lFAQ - IControlU&8] &aLooking for fun? You can do &b/icu control <player> &ato control that player!")
									sleep(1200)
									bot.chat("/bcraw &8[&e&lFAQ - Weapons&8] &aWeapons are now available on the server! You can use it on &b/weapons")
									sleep(1200)									
									bot.chat("/bcraw &8[&e&lFAQ - DoBlockImage&8] &aYou may upload a image to the server by typing &b/doblockimage <url>")		
									sleep(1200)									
									bot.chat("/bcraw &8[&e&lFAQ - Extras&8] &aExtras is a cool feature that allows you to do more stuff! &b/tag /spawn /console /bcraw /username /jumpscare /unloadchunks")			
									sleep(1200)									
									bot.chat("/bcraw &8[&e&lFAQ - PlayerParticle&8] &aParticles are useful! You can use them by typing &b/ppo")	
									sleep(1200)									
									bot.chat("/bcraw &8[&e&lFAQ - CommandSpy&8] &aYou can see every players of their commands! &b/commandspy")
									sleep(1200)		
								} else {
									if (input == 'anarchy') {
										bot.chat("/bcraw &8[&e&lFAQ - Anarchy&8] &aWhat do you expect? This is a truly Anarchy server!")
										sleep(1200)
										bot.chat("/bcraw &8[&e&lFAQ - Anarchy&8] &aYou don't have to worry too much... Have fun...")
									} else {
										bot.chat("/bcraw &8[&e&lFAQ - Solutions&8] &dThat is not a valid option! You can only write &e&oop faq deop help anarchy&d!")
										sleep(1200)
									}
								}
							}
						}
					}
				}
		} else {
			// bot.chat("/bcraw &8[&e&lFAQ - Command&8] &cThis command is disabled currently. Please try again later!")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}help`) {
		if (data.includes("show-help-menu = 'on'")) {
			if (xp[player]) {
				if (xp[player].level < 1) {
					// first category + command
					bot.chat("/bcraw &8[&e&lFun&8] &a" + `${prefix}say ${prefix}lenny`)
					// command delay
					sleep(1200)
					// second category + command
					bot.chat("/bcraw &8[&e&lChat&8] &a" + `${prefix}faq ${prefix}help ${prefix}info ${prefix}time ${prefix}perms ${prefix}invite ${prefix}prefix ${prefix}version`)
					// command delay
					sleep(1200)
					// third category + command
					bot.chat("/bcraw &8[&e&lMisc&8] &a" + `${prefix}xp ${prefix}coins ${prefix}timer ${prefix}guess ${prefix}status ${prefix}timing ${prefix}webhook`)
					// command delay
					sleep(1200)
					// fourth category + command
					bot.chat("/bcraw &8[&e&lModeration&8] &a" + `${prefix}bad ${prefix}bye ${prefix}kick ${prefix}crash ${prefix}debug`)
					// command delay
					sleep(1200)
					// fifth category + command
					bot.chat("/bcraw &8[&e&lUtils&8] &a" + `${prefix}encode ${prefix}random ${prefix}encoding`)
					// command delay
					sleep(1200)
					// help command information
					bot.chat("/bcraw &8[&e&lCommands&8] &aType " + prefix + "help <command> for the command information!")
					// command delay
					sleep(1200)
					// category command information
					bot.chat("/bcraw &8[&e&lCategorys&8] &aType " + prefix + "help <category> for the command information!")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					// command delay, make sure it response instantly
					sleep(1200)
				} else {
					if (xp[player].level >= 10) {
						// first category + command
						bot.chat("/bcraw &8[&e&lFun&8] &a" + `${prefix}say ${prefix}lenny`)
						// command delay
						sleep(1200)
						// second category + command
						bot.chat("/bcraw &8[&e&lChat&8] &a" + `${prefix}faq ${prefix}help ${prefix}info ${prefix}time ${prefix}perms ${prefix}invite ${prefix}prefix &a${prefix}version`)
						// command delay
						sleep(1200)
						// third category + command
						bot.chat("/bcraw &8[&e&lMisc&8] &a" + `${prefix}xp ${prefix}coins ${prefix}timer ${prefix}guess ${prefix}status ${prefix}timing ${prefix}webhook`)
						// command delay
						sleep(1200)
						// fourth category + command
						bot.chat("/bcraw &8[&e&lModeration&8] &a" + `${prefix}bad ${prefix}bye ${prefix}kick ${prefix}quit ${prefix}crash &c${prefix}debug`)
						// command delay
						sleep(1200)
						// fifth category + command
						bot.chat("/bcraw &8[&e&lUtils&8] &a" + `${prefix}encode ${prefix}random ${prefix}encoding`)
						// command delay
						sleep(1200)
						// help command information
						bot.chat("/bcraw &8[&e&lCommands&8] &aType " + prefix + "help <command> for the command information!")
						// command delay
						sleep(1200)
						// category command information
						bot.chat("/bcraw &8[&e&lCategorys&8] &aType " + prefix + "help <category> for the command information!")
						// client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
						// command delay, make sure it response instantly
						sleep(1200)
					} 
				}
			} else {
				// first category + command
				bot.chat("/bcraw &8[&e&lFun&8] &a" + `${prefix}say ${prefix}lenny $shrug`)
				// command delay
				sleep(1200)
				// second category + command
				bot.chat("/bcraw &8[&e&lChat&8] &a" + `${prefix}faq ${prefix}help ${prefix}info ${prefix}time ${prefix}perms ${prefix}invite ${prefix}prefix ${prefix}version`)
				// command delay
				sleep(1200)
				// third category + command
				bot.chat("/bcraw &8[&e&lMisc&8] &a" + `${prefix}xp ${prefix}coins ${prefix}timer ${prefix}guess ${prefix}status ${prefix}timing ${prefix}webhook`)
				// command delay
				sleep(1200)
				// fourth category + command
				bot.chat("/bcraw &8[&e&lModeration&8] &a" + `${prefix}bad ${prefix}bye ${prefix}kick ${prefix}quit ${prefix}crash ${prefix}debug`)
				// command delay
				sleep(1200)
				// fifth category + command
				bot.chat("/bcraw &8[&e&lUtils&8] &a" + `${prefix}encode ${prefix}random ${prefix}encoding`)
				// client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				// command delay, make sure it responses instantly
				sleep(1200)
			}
		} else {
			// bot.chat("/bcraw &8[&e&lHelp Menu&8] &cThis command is disabled currently. Please try again later!")
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
		if (command == `${prefix}kick`) {
			if (data.includes("kick-other-players = 'on'")) {
				if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lKeep It Clean Kids&8] &cYou don't have permission to use this command.")
					if (xp[player].level < 1) {
						// bot.chat("/bcraw &8[&e&lKeep It Clean Kids&8] &cYou don't have permission to use this command.")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (!input) {
							bot.chat("/minecraft:give " + player + " minecraft:potion{CustomPotionColor:2147483647}")
							sleep(1200)
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
						} else {
							bot.chat("/minecraft:give " + input + " minecraft:potion{CustomPotionColor:2147483647}")
							sleep(1200)
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
						}
					}
			} else {
				// bot.chat("/bcraw &8[&e&lKeep It Clean Kids&8] &cThis command is disabled currently. Please try again later!")
				//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
			}				
		}
		if (command == `${prefix}time`) {
			if (data.includes("show-time-information = 'on'")) {
				if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &cYou don't have permission to use this command.")
					if (xp[player].level < 1) {
						// bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &cYou don't have permission to use this command.")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &aGetting current time information...")
						sleep(1200)
						bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &aThe current time of Universal Time Coordinated is " + timestamp.utc('YYYY years MM months DD days HH hours mm minutes ss seconds ms milliseconds'))
						sleep(1200)
						bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &aMeanwhile... My current time is " + timestamp('YYYY years MM months DD days HH hours mm minutes ss seconds ms milliseconds'))
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					}
				} else {
					// bot.chat("/bcraw &8[&e&lUniversal Time Coordinated&8] &cThis command is currently disabled. Please try again later.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				}
		}
		if (command == `${prefix}coins`) {
			if (data.includes("show-player-coins-information = 'on'")) {
				if (!coins[player]) {
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					bot.chat("/bcraw &8[&e&lCoins&8] &aYou have &b" + coins[player].coins + " &ecoins &aon the server.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				}
			} else {
				//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
			}
		}
		if (command == `${prefix}crash`) {
			if (data.includes("crash-other-players = 'on'")) {
				if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lClient Crashing&8] &cYou don't have permission to use this command.")
					if (xp[player].level < 1) {
						// bot.chat("/bcraw &8[&e&lClient Crashing&8] &cYou don't have permission to use this command.")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (!input) {
							bot.chat("/bcraw &8[&e&lClient Crashing&8] &bYou didn't write anything! Maybe try again?")
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
						} else {				
							bot.chat("/top")
							sleep(1200)
							bot.chat("/schem load quadsign")
							sleep(1200)
							bot.chat("/minecraft:tp " + input + " @s")
							sleep(1200)
							bot.chat("//paste")
						}
					}
			} else {
				//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
			}
	}
	if (command == `${prefix}lenny`) {
		if (data.includes("lenny-generator = 'on'")) {
			const lennyreplymsg = ["How?", "Why", "What?", "Umm.", "Umm...", "Umm... no", "Umm... how?", "Umm... why?", "Umm... what?", "Umm... who are you?", "Umm... I know you?", "Umm... I know you somewhere?", "Umm... Do i know you?", "Umm... what do you expect to see here?", "Umm... There is nothing", "Umm... there is nothing here", "Umm... There is nothing to see here", "Umm... There is nothing to see here... Go away!", "Umm... I would say no.", "Umm... I would like to say no", "Umm... I don't think so", "Umm... My face is ugly.", "Umm... I'm ugly...", "Umm... I'm too ugly...", "Umm... I don't think that will work so", "Umm... I don't really think that will work for me.", "Umm... I don't understand what you're trying to do with me..."]
			const lennymsg = lennyreplymsg[Math.floor(Math.random()*lennyreplymsg.length)];
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lLenny Generator&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lLenny Generator&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					bot.chat("/bcraw &8[&e&lLenny Generator&8] &a" + lennymsg)
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}timer`) {
		if (data.includes("timer-generator = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lWait Timer&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lWait Timer&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (input > 10) {
						bot.chat("/bcraw &8[&e&lWait Timer&8] &aI can't wait longer than 10 seconds!")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (!input) {
							bot.chat("/bcraw &8[&e&lWait Timer&8] &bYou didn't write anything! Maybe try again?")
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
						} else {
							bot.chat("/bcraw &8[&e&lWait Timer&8] &aAlright! I have set a " + input + "s timer and it will expire soon!")
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
							sleep(input * 1000)
							bot.chat("/bcraw &8[&e&lWait Timer&8] &aHey! The timer has been expired!")
						}
					}
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}guess`) {
		if (data.includes("guess-generator = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lGuess The Number&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lGuess The Number&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lGuess The Number&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (input == interger) {
							fs.writeFile('./settings/interger.json', `${Math.floor(Math.random() * 1000 + 1)}`, (error) => {
								if (error) {
									console.log("[Guess The Number] There was an error: " + error)
									bot.chat("/bcraw &8[&e&lGuess The Number&8] &dThere was an error while trying to execute this command! Please try again later!")
								}
									bot.chat("/bcraw &8[&e&lGuess The Number&8] &aCongratulations! You guessed the correct number!")
									//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
									})
									fs.readFile('./settings/interger.json', 'utf8', function(error) {
										if (error) console.log(error)})
											} else {
												bot.chat("/bcraw &8[&e&lGuess The Number&8] &bAh! You didn't get it! Maybe try again?")
												//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
											}
							}
					}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}encode`) {
		if (data.includes("base64-encoding = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lEncoding Base64&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lEncoding Base64&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lEncoding Base64&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						bot.chat("/bcraw &8[&e&lEncoding Base64&8] &a" + Buffer.from(input).toString('base64'))
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
					}
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}config`) {
		if (data.includes("server-configuration-information = 'on'")) {
			if (!xp[player]) return;
				if (xp[player].level < 1) {
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lBot Configuration&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (input == "enable kick") {
							if (configuration.includes("kick-other-players = 'off'")) {
								var inputting = configuration.replace("kick-other-players = 'off'", "kick-other-players = 'on'")
								configuration.replace("kick-other-players = 'off'", "kick-other-players = 'on'")
								fs.writeFileSync("./settings/configuration.json", inputting, 'utf-8')
								process.exit(1)
							}
						} else {
							if (input == 'enable deop') {
								if (configuration.includes("deop-players-when-joining = 'off'")) {
									var inputting = configuration.replace("deop-players-when-joining = 'off'", "deop-players-when-joining = 'on'")
									configuration.replace("deop-players-when-joining = 'off'", "deop-players-when-joining = 'on'")
									fs.writeFileSync("./settings/configuration.json", inputting, 'utf-8')
									process.exit(1)
								}
							} else {
								if (input == 'enable antikaboom') {
									if (configuration.includes("anti-kaboom-username = 'off'")) {
										var inputting = configuration.replace("anti-kaboom-username = 'off'", "anti-kaboom-username = 'on'")
										configuration.replace("anti-kaboom-username = 'off'", "anti-kaboom-username = 'on'")
										fs.writeFileSync("./settings/configuration.json", inputting, 'utf-8')
										process.exit(1)
									}
								}
							}
						}
					}
				}
		}
	}
	if (command == `${prefix}status`) {
		if (data.includes("server-status-information = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lServer Status&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) {
					// bot.chat("/bcraw &8[&e&lServer Status&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lServer Status&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
			} else {
				if (input == 'yes') {
					request('https://api.mcsrvstat.us/2/91.121.50.14:53950', (error, response, body) => {
						if (!error && response.statusCode === 200) {
							const responsing = JSON.parse(body);
								if (responsing.debug.query == true) {
									bot.chat("/bcraw &8[&e&lServer Status&8] &aLooking for information on the server with Query enabled mode...")
									sleep(1200)
									bot.chat("/bcraw &8[&e&lServer Status&8] &aThis server is using PaperSpigot " + responsing.version + ' and there are ' + responsing.players.online + "/" + responsing.players.max + " on the server!")
									// keep in mind that kaboom used edited server software, it will return null or undefined
									// bot.chat("/bcraw &8[&e&lServer Status&8] &aThis server is using " + responsing.software + ' ' + responsing.version + ' and there are ' + responsing.players.online + "/" + responsing.players.max + " on the server!")
									sleep(1200)
									bot.chat("/bcraw &8[&e&lServer Status&8] &aThe server is running " + responsing.online + " mode! Their MOTD (Message of The Day) is " + responsing.motd.clean)
									//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
								} else {
									bot.chat("/bcraw &8[&e&lServer Status&8] &bLooks like the server didn't enable Query mode! Maybe try again?")
									//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
								}
						} else {
							bot.chat("/bcraw &8[&e&lServer Status&8] &bThere was an error while trying to execute this command! Please try again later!")
							console.log("Got an error: ", error, ", status code: ", responsing.statusCode)
						}
					})
			} else {
				if (input == 'no') {
					request('https://api.mcsrvstat.us/2/91.121.50.14:53950', (error, response, body) => {
						if (!error && response.statusCode === 200) {
							const responsing = JSON.parse(body);
								if (responsing.debug.query == false) {
									bot.chat("/bcraw &8[&e&lServer Status&8] &aLooking for information on the server with Query disabled mode...")
									sleep(1200)
									bot.chat("/bcraw &8[&e&lServer Status&8] &aThis server is using PaperSpigot " + responsing.version + ' and they are using ' + responsing.port + " on the port address!")
									// keep in mind that responsing.software returns null because of the server software is edited
									// bot.chat("/bcraw &8[&e&lServer Status&8] &aThis server is using " + responsing.software + ' ' + responsing.version + ' and they are using ' + responsing.port + " on the port address!")
									//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
								} else {
									bot.chat("/bcraw &8[&e&lServer Status&8] &bLooks like the server is running Query mode! Maybe try again?")
									//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
								}
							} else {
								bot.chat("/bcraw &8[&e&lServer Status&8] &bThere was an error while trying to execute this command! Please try again later!")
								console.log("Got an error: ", error, ", status code: ", responsing.statusCode)
							}
					})
				} else {
					bot.chat("/bcraw &8[&e&lServer Status&8] &dThat is not a valid option! You can only write &a&oyes &dor &c&ono&d!")
				}
			}
		}
	}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}prefix`) {
		if (data.includes("show-prefix-information = 'on'")) {
			if (input) {
				if (Permissionable(player)) {
					// This requires fs from Node.js! If you don't know what that is! Check that out!
					// https://npmjs.com/package/fs
					fs.writeFileSync("./settings/prefix.json", `${input}`, "utf-8") // utf-8 format fixed
					bot.chat("/bcraw &8[&e&lPrefix Changer&8] &aI have changed my prefix to &b" + input + " &aon the server!")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
					// wait 2.5s
					sleep(2500)
					// enable exit state with code 1
					process.exit(1)
				}
			}
				if (!input) {
					bot.chat("/bcraw &8[&e&lPrefix Changer&8] &aHey there! I am currently using &b" + prefix + " &aon the server!")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else bot.chat("/bcraw &8[&e&lPrefix Changer&8] &aHey there! I am currently using &b" + prefix + " &aon the server!")
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}random`) {
		if (data.includes("random-generator = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lRandom Generator&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) {
					// bot.chat("/bcraw &8[&e&lRandom Generator&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
					bot.chat("/bcraw &8[&e&lRandom Generator&8] &bYou didn't write anything! Maybe try again?")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (input == 'player') {
							bot.chat("/bcraw &8[&e&lRandom Generator&8] &aAlright! I will choose " + `${Object.keys(bot.players)[Math.floor(Math.random() * Object.keys(bot.players).length)]}` + "!")
							//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
						} else {
							if (input == 'number') {
								bot.chat("/bcraw &8[&e&lRandom Generator&8] &aAlright! I will choose " + `${Math.floor(100000 + Math.random() * 900000)}` + "!")
								//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
						} else {
							bot.chat("/bcraw &8[&e&lRandom Generator&8] &dThat is not a valid option! You can only write &a&oplayer &dor &c&onumber&d!")
						}
					}
				}
			}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}version`) {
		if (data.includes("show-version-information = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lBot Information&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) {
					// bot.chat("/bcraw &8[&e&lBot Information&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lBot Information&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						bot.chat("/bcraw &8[&e&lBot Information&8] &aI am currently running &bv1.2.6 &aby ??? � Another#6363")
					}
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}webhook`) {
		if (data.includes("discord-webhook-generator = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lDiscord Webhook&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) {
					// bot.chat("/bcraw &8[&e&lDiscord Webhook&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lDiscord Webhook&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						const webmessage = new webhook.MessageBuilder()
						.setName(`${player}`)
						.setColor("#" + (Math.random()*0xFFFFFF<<0).toString(16))
						// .setImage(`https://minotar.net/helm/${player}`)
						.addField(`${input}`)
						.setTime()
						hook.send(webmessage)
						bot.chat("/bcraw &8[&e&lDiscord Webhook&8] &aWebhook messages have been sent to the channel!")
						sleep(1200)
					}
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}encoding`) {
		if (data.includes("utf16-encoding = 'on'")) {
			if (!xp[player]) return; // bot.chat("/bcraw &8[&e&lEncoding UTF-16&8] &cYou don't have permission to use this command.")
				if (xp[player].level < 1) { 
					// bot.chat("/bcraw &8[&e&lEncoding UTF-16&8] &cYou don't have permission to use this command.")
					//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
				} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lEncoding UTF-16&8] &bYou didn't write anything! Maybe try again?")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						bot.chat("/bcraw &8[&e&lEncoding UTF-16&8] &a" + Buffer.from(input).toString('UTF-16LE'))
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
					}
				}
		} else {
			//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
	}
	if (command == `${prefix}statusinformation`) {
		if (data.includes("show-full-server-information = 'on'")) {
			//if (!xp[player]) return bot.chat("/bcraw &8[&e&lServer Status Information&8] &cYou don't have permission to use this command.")
			//	if (xp[player].level < 1) {
			//		bot.chat("/bcraw &8[&e&lServer Status Information&8] &cYou don't have permission to use this command.")
			//		client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
			//	} else {
					if (!input) {
						bot.chat("/bcraw &8[&e&lServer Status&8] &dThat is not a valid option! You can only write &a&oconfirm&d!")
						//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
					} else {
						if (input == 'confirm') {
							request('https://api.mcsrvstat.us/2/91.121.50.14:53950', (error, response, body) => {
								if (!error && response.statusCode === 200) {
									const responsing = JSON.parse(body);
										if (responsing.debug.query == false) {
											bot.chat("/bcraw &8[&e&lServer Status&8] &aLooking for debug information on the server...")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer IP&8: &b" + responsing.ip)
											sleep(1200)
											// only included if the map is not 'world'
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Map&8: " + responsing.map)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Maps&8: &bworld, world_nether, world_the_end")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Mods (Raw)&8: " + responsing.mods.raw)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Mods (Raw)&8: &bNone")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Mods (Name)&8: " + responsing.mods.name)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Mods (Name)&8: &bNone")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (Raw)&8: " + responsing.info.raw)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (Raw)&8: &bNone")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (HTML)&8: " + responsing.info.html)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (HTML)&8: &bNone")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (Clean)&8: " + responsing.info.clean)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Info (Clean)&8: &bNone")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Port&8: &b" + responsing.port)
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer MOTD (Raw)&8: " + responsing.motd.raw)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer MOTD (Raw)&8: &bNone")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer MOTD (HTML)&8: " + responsing.motd.html)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer MOTD (HTML)&8: &bNone")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer MOTD (Clean)&8: &b" + responsing.motd.clean)
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Ping&8: &b" + responsing.ping)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Ping&8: &bEnabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Version&8: &b" + responsing.version)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Version&8: &b1.13.2")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Players (Max)&8: &b" + responsing.players.max)
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Players (Online)&8: &b" + responsing.players.online)
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Players (List)&8: &b" + responsing.players.list)
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Plugins (Raw)&8: " + responsing.plugins.raw)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Plugins (Raw)&8: &bCommandSpy, DoBlockImage 1.3, Essentials 2.1, Extras, FAWE 1.1, iDisguise 5.8, PlayerParticle 6.5, ProtocolLib 4, ViaBackwards 1.3, ViaRewind 1.4, ViaVersion 2.1, Weapons, WorldEdit 1.1")																							
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Plugins (Name)&8: " + responsing.plugins.name)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Plugins (Name)&8: &bCommandSpy, DoBlockImage, Essentials, Extras, iControlU, iDisguise, PlayerParticles, ViaBackwards, ViaRewind,ViaVersion, Weapons, WorldEdit")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Protocol&8: &b" + responsing.protocol)
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Hostname&8: " + responsing.hostname)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Hostname&8: &bkaboom.pw")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Software&8: " + responsing.software)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Software&8: &bPaperSpigot (1.13.2-R0.1-SNAPSHOT)")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer List Ping&8: &b" + responsing.ping)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer List Ping&8: &bEnabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Query Mode&8: " + responsing.query)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Query Mode&8&8: &bDisabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer SRV Record&8: &b" + responsing.srv)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer SRV Record&8: &bEnabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Icon Base64&8: " + responsing.icon)
											// sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Cached Time&8: &b" + responsing.cachetime)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Cached Time&8: &bDisabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Animated MOTD&8: &b" + responsing.animatedmotd)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Animated MOTD&8: &bDisabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer IP SRV Record&8: &b" + responsing.ipinsrv)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer IP SRV Record&8: &bEnabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Query Protocol&8: &b" + responsing.querymismatch)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Query Protocol&8: &bDisabled")
											sleep(1200)
											// bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Proxypipe Mode&8: &b" + responsing.proxypipe)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer Proxypipe Mode&8: &bDisabled")
											sleep(1200)
											// a fake one! shhh don't tell others... xdd
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer SRV Redirecting&8: &bEnabled")
											sleep(1200)
											bot.chat("/bcraw &8[&e&lServer Status&8] &aServer SRV Redirecting IP&8: &b127.0.0.1")
											//client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + ' ' + input + '`')
										} else {
											bot.chat("/bcraw &8[&e&lServer Status&8] &bThere was an error while trying to execute this command! Please try again later...")
											console.log("[Status Information] There was an error: " + error + " with status code: ", responsing.statusCode)
										}
									}
								}
							)
					}
				}
			}
		} else {
			// client.channels.get('608295668833976320').send('**[**:gear:**]** ' + '`' + player + '` ' + 'issued bot command ' + '`' + command + '`')
		}
//	}
})

// This is one of my experiment function! Introducing the coin system! It is a function that allows you to get coins by chatting!
bot.on('chat', (player) => {
	// requires the coin file
	coins = require('./settings/coins.json', 'UTF-8')
	// if they are not in the .json list
    if(!coins[player]) {
	// add them into the list starts with 0 balance
    coins[player] = {
    coins: 0 }};
	if (data.includes("coins-system = 'on'")) {
		// coin amount basement
		let coinAmt = Math.floor(Math.random() * 10) + 1;
		// base amount backup
		let baseAmt = Math.floor(Math.random() * 10) + 1;
		// if they are equal
		if(coinAmt === baseAmt) {
			// add random coins in their balance
			coins[player] = {
			coins: coins[player].coins + coinAmt };
			// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
			// https://npmjs.com/package/fs
			fs.writeFile("./settings/coins.json", JSON.stringify(coins), (err) => {
				// if theres an error
				if (err) console.log('[Coins System] There was an error occured: ' + err)
			})
		}
	}
	// requires the xp file
	let xp = require("./settings/debug-experience.json");
	// base xp given
    let xpAdd = Math.floor(Math.random() * 100) + 1;
	// if they are not in the list
	if (data.includes("bypass-xp-system-debugging = 'on'")) {
		if (!xp[player]) {
			// starts with 0 xp
			xp[player] = {
			// 0 xp with default level
			xp: 0,
			// default level
			level: 1 }
		}
			// current xp for chatting
			let curxp = xp[player].xp;
			// current level for chatting
			let curlvl = xp[player].level;
			// each next level of how many experiences
				let nxtlvl = xp[player].level * 2;
				// they chat everytime and add random experiences
				xp[player].xp = curxp + xpAdd;
				// if their experience is higher than 5000
				if (nxtlvl <= xp[player].xp) {
					// add one level
					xp[player].level = curlvl + 1;
					// broadcast
					bot.chat("Congratulations, " + player + "! You are now Lv." + Math.round(curlvl + 1) + "!")
				}
		// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
		// https://npmjs.com/package/fs
		fs.writeFile("./settings/debug-experience.json", JSON.stringify(xp), (err) => {
			// if error appeared, send error
			if (err) console.log('[Debugging - Level System] There was an error occured: ' + err)
		})
	} else {
		if (data.includes("xp-system = 'on'")) {
			xp = require('./settings/experience.json', 'UTF-8')
			if (!xp[player]) {
				// starts with 0 xp
				xp[player] = {
				// 0 xp with default level
				xp: 0,
				// default level
				level: 1 }
			}
				// current xp for chatting
				let curxp = xp[player].xp;
				// current level for chatting
				let curlvl = xp[player].level;
				// each next level of how many experiences
					let nxtlvl = xp[player].level * 1500;
					// they chat everytime and add random experiences
					xp[player].xp = curxp + xpAdd;
					// if their experience is higher than 5000
					if (nxtlvl <= xp[player].xp) {
						// add one level
						xp[player].level = curlvl + 1;
						// broadcast
						//bot.chat("/playsound minecraft:ui.toast.challenge_complete master @a ~ ~ ~ 10000000")
						//sleep(1200)
						bot.chat("/bcraw &8[&e&lLevel&8] &aCongratulations, &e" + player + "&a! You are now &bLv." + Math.round(curlvl + 1) + " &aon the server!")
						sleep(1200)
					}
					// fs is a simple File System by Node.js! If you don't know what that is! Check that out too!
					// https://npmjs.com/package/fs
					fs.writeFile("./settings/experience.json", JSON.stringify(xp), (err) => {
						// if error appeared, send error
						if (err) console.log('[Level System] There was an error occured: ' + err)
				})
		}
	}
})

bot.on('playerJoined', function(player) {
	if (configuration.includes("kick-other-players = 'on'")) {
		if (Permissionable(player.username)) {
			if (configuration.includes("ignore-player-permissions = 'on'")) {
				console.log("[Configuration] " + player.username + " has been ignored! (ignore-player-permission = 'on')")
			} else {
				bot.chat("/minecraft:give " + player.username + ' minecraft:potion{Potion:"minecraft:water",CustomPotionColor:-27} 1')
			}
		} else {
			// if (username.includes("")) {
			// 	console.log("[Configuration] " + player.username + " can not be kicked! (illega-syntaxes-ignored = 'on')")
			// } else {
			bot.chat("/minecraft:give " + player.username + " minecraft:potion{CustomPotionColor:2147483647}")
			console.log("[Configuration] " + player.username + " has been kicked! (kick-other-players = 'on')")
			sleep(1200)
		}
	} else {
		if (configuration.includes("deop-players-when-joining = 'on'")) {
			if (Permissionable(player.username)) {
				if (configuration.includes("ignore-player-permissions = 'on'")) {
					console.log("[Configuration] " + player.username + " has been ignored! (ignore-player-permission = 'on')")
				} else {
					bot.chat("/minecraft:deop " + player.username)
				}
			} else {
				// if (username.includes("")) {
				// 	console.log("[Configuration] " + player.username + " can not be kicked! (illega-syntaxes-ignored = 'on')")
				// } else {
				bot.chat("/minecraft:deop " + player.username)
				console.log("[Configuration] " + player.username + " has been de-opped on the server! (deop-players-when-joining = 'on')")
				sleep(1200)
			}
		} else {
			if (configuration.includes("commandspy-always-enable = 'on'")) {
				if (Permissionable(player.username)) {
					bot.chat("/sudo " + player.username + " cspy")
					console.log("[Configuration] CommandSpy has been auto-enabled for " + player.username + " on the server! (commandspy-always-enable-priority = 'on')")
				} else {
					bot.chat("/sudo " + player.username + " cspy")
					console.log("[Configuration] CommandSpy has been auto-enabled for " + player.username + " on the server! (commandspy-always-enable = 'on')")
				}
			}
		}	
	}
})
		
bot.on('kicked', (reason) => {
	// send error reason
	// client.channels.get('608295628711133211').send('**[**:warning:**]** ' + 'I have been disconnected: ' + reason)
	// restart script
    process.exit(1)
})

// Admin list; Hard-coded with @MorganAnkan, @GamesAwayHD and @Officer
function Add(username) {
	// get read list
	var adminData = fs.readFileSync("./settings/administrators.json");
	// parse new information
	var newAdmin = JSON.parse(adminData);
	// get their name onto the list if available right now
	newAdmin.admins.push(username);
	// write the file and save it
	fs.writeFileSync("./settings/administrators.json", JSON.stringify(newAdmin));
}

// Test experiment function! Be aware not to use it!
function Random(length) {
	// create empty variable
	var stuff = '';
	// currently allowed characters that can join any servers
	var characters  = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789~!@#$%^&*()_-=+,.`<>{}[];:/|" + '\"';
	// maximum characters, set it to whatever you want, maximum is 16
	var charactersLength = characters.length;
	// for loops; generate a specific number
	for ( var i = 0; i < length; i++ ) {
		// generate an random number
		stuff += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	// create empty variable to a known variable
	outputting = stuff;
	// get returned variable
	return stuff;
}

// This is one of my experiment function! It is a function that allows to create bots to a server!
function MoreBots(quantity, server, bind, version, username) { 
	// for loops; it will generate a number from 0 to a number that you set in the quantity!
	for (i = 1; i < quantity + 1; i++) {
		// Creates bot
		var bots = mineflayer.createBot({
			// server ip address
			host: server,
			// server port address
			port: bind,
			// Available protocol version: 1.9 1.10 1.10.2 1.11 1.11.2 1.12 1.12.1 1.12.2 choose one of them!
			version: version,
			// the one that you typed on the chat!
			username: '[' + i + '] ' + username,
			// check if the server is timed out, if so the bot will disconnect itself
			checkTimeoutInterval: 60 * 10000
		})
	}
}

// new permissions system, hard-coded by @MorganAnkan with love <3
function Permissionable(username) {
	// the new permission checker list
	var adminData = fs.readFileSync("./settings/administrators.json");
	// parse the information, if they are, allows them
	var dataInfo = JSON.parse(adminData);
	// return statement of the information
	return adminData.includes(username);
}

// This is the old permission system, soft-coded by @AnotherGuy19 and hard-coded by @MorganAnkan
// With some help by @GamesAwayHD, we managed to make a permission system! Credits to @Officer anyways
// If you want to use this, simply change the function name below to 'Permissionable'
function PermissionChecker(username) {
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

client.login(process.env.token); // Thats it! You're done with this custom-coded Discord.js bot!