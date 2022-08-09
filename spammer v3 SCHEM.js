const mineflayer = require('mineflayer')
const wait = require('system-sleep')
const request = require("request");
const express = require("express");

const delay = "1000"
const schemprefix = "!!!."
const generatedlength = "64";

const app = express();

app.get("/", function(request, resend) {
  resend.send(" ");
});

app.listen(2345, function() {
  console.log()
});

function ping() {
  try {
    request("https://schem-spam.anotherguy19.repl.co", function(err, res, body) { undefined })
} catch(e) { undefined }
  setTimeout(ping, 10000);
}

ping();

const bot = mineflayer.createBot({
	host: "play.kaboom.pw",
	port: "25565",
	username: "¡±¡±¡±¡±¡±¡±¡±¡±¡±¡±¡±¡±¡±¡±",
	version: "1.12.2"
});

bot.on('login', function(player, message) {
  // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n--------------------------------\n\nPrefix ? " + prefix + "\nLength ? " + generatedlength + "\nDelay ? " + delay + "\nCommand Prefix ? " + schemprefix + "\n\n--------------------------------\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  wait(delay)
  bot.chat("/bcraw &0&7&l&m?&8&l&m-------------------------------------------&7&l&m?&0")
  wait(delay)
  bot.chat("/bcraw &0")
  wait(delay)
  bot.chat("/bcraw  &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &bSchematic Generator &dv1.0.4 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0")
  wait(delay)
  bot.chat("/bcraw  &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &3Approved by &a¡u&2 ??????? &a¡v&8 ¡E &c Another &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0")
  wait(delay)
  bot.chat("/bcraw &0")
  wait(delay)
  bot.chat("/bcraw &0&7&l&m?&8&l&m-------------------------------------------&7&l&m?&0")
  wait(delay)
  bot.chat("/prefix &9&lSCHEMATIC &5&lGENERATOR")
})

bot.on('message', (msg) => {
	console.log(msg.toString())
});

function gencode(length) {
  var result           = '';
  var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!$%^*_-+\/'.,";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function spamcode(many) {
  for(i = 0; i < many; i++) {
    startgen(gencode(generatedlength));
  }
}

function startgen(times) {
  wait(delay)
  bot.chat(`/schem save ${schemprefix}` + times)
}