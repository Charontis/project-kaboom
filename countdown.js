var request = require("request");
var sleep = require("system-sleep")
var mineflayer = require("mineflayer")

var express = require("express");
var app = express();

app.get("/", function(req, html) {
  html.send(" ");
});

app.listen(9345, function() { undefined });

function getPing() {
    try {
        request("https://christmas.anotherguy19.repl.co", function(err, res, body) { undefined })
    } catch (error) { undefined }
setTimeout(getPing, 10000);
}

getPing();

const bot = mineflayer.createBot({
	host: "play.kaboom.pw",
	port: "25565",
	username: "§§",
	version: "1.12.2"
});

bot.on('login', function() {
    bot.chat("/prefix &1&l2&9&l0&3&l2&b&l0 &c&lC&4&lB")
});

var countDownDate = new Date("Dec 30, 2020 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    bot.chat("There are " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds left until 2020 Christmas!");
    console.log("There are " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds left until 2020 Christmas!");

    if (distance < 0) {
        clearInterval(x);
        bot.chat("Christmas has arrived! Merry Christmas!")
        console.log("\n[2020] Christmas has arrived!");
    }
}, 12000);