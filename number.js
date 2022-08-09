const mineflayer = require('mineflayer');
const sleep = require('system-sleep');
const fs = require('fs');

const bot = mineflayer.createBot({
  host: 'play.kaboom.pw',
  port: 25565,
  username: "",
  version: "1.12.2"
});

var RNG = Math.floor(Math.random() * 101); 
var BRNG = Math.floor(Math.random() * 10001); 
var Accessable = ['AnotherGuy19', 'MorganAnkan', 'BlueBurgersTDD']

function Permissionable(username) {
	for (let i = 0; i <= Accessable.length; i++) {
		if (username == Accessable[i] && i < Accessable.length) {
			return true;
		} else if (username == Accessable[i] && i == Accessable.length) {
			return true;
		} else if (username !== Accessable[i] && i == Accessable.length) {
			return false;
		}
	}
}

bot.on('login', () => {
	console.log('[RNG Developer] The number is ' + RNG)
	fs.readFile('previous.txt', 'utf8', function(err, contents) {
	bot.chat("/tellraw &e[Random Number Generator] Hey! Guess the number from 1 to 100 (" + contents + ")")
	})
//	console.log('[NRNG Developer] The number is ' + BRNG)
//	sleep(1000)
//	bot.chat("/tellraw &e[Random Number Generator] Hey! Can you guess the right number from 1 to 100?")
//	bot.chat("&e[Random Number Generator] Available Hints: Small Big")
//	bot.chat("&a[Bigger Random Number Generator] Hey! Wanna fight? Type an interger against my number!")
	sleep(1000)
	bot.chat("/v")
})

bot.on('chat', (username, message) => {
	if (message == RNG) {
	const fs = require("fs");
	const data = `${RNG}`;
	fs.writeFile('previous.txt', data, (err) => {
		if (err) console.log(err);
		bot.chat('/tellraw &a[Random Number Generator] That was correct! The number is ' + RNG)})
		sleep(6500)
		bot.chat('/tellraw &3[Random Number Generator] Game Over! Restarting in 10 seconds!')
		sleep(3000)
		quit(username)}
//	if (message == "Small") {
//		if (RNG < 50) return bot.chat('&e[Random Number Generator] True')
//	else bot.chat('&e[Random Number Generator] False')}
//	if (message == "Big") {
//		if (RNG > 50) return bot.chat('&e[Random Number Generator] True')
//	else bot.chat('&e[Random Number Generator] False')}
//	if (message > 10001){
//		bot.chat('&a[Bigger Random Number Generator] Hey bro! Maybe try again? The limit was 10000')
//	}else if (message >= BRNG){
//		bot.chat('&a[Bigger Random Number Generator] You got me! It was ' + BRNG)
//		sleep(2500)
//		bot.chat('&c[Game Over] Restarting in 10 seconds...')
//		sleep(1000)
//		quit(username)}
})

function newClient(username, password, quantity) { 
	if (quantity > 21) {
	bot.chat('&e> You are allowed to use a specific number of bots to the server (6 Avilable)')
	return bot.chat('&c> You do not have permission to use this command &5(Lead Developer)')
	}
			for (i = 0; i < quantity; i++) {
			if (password === null) {
			var bots = mineflayer.createBot({
			host: "play.kaboom.pw",
			port: 53950,
			version: 1.12,
			username: username + ' ' + i,
			checkTimeoutInterval: 60 * 10000
			})
			} else {
			var botz = mineflayer.createBot({
			host: "play.kaboom.pw",
			port: 53950,
			version: 1.12,
			username: username + ' ' + i,
			checkTimeoutInterval: 60 * 10000
		})
	}}
}	

bot.on('chat', (username, message) => {
   let cmd = message.split('')[0].toLowerCase();
   let input = message.slice(cmd.length).trim();
   if (cmd == '>') {
		if (Permissionable(username)) {
        try {
          bot.chat(`&a> ${eval(input)}`);
        } catch (e) {
          bot.chat(`&a> ${eval}`);
        }
    }
  }
})