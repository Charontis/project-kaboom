const mineflayer = require('mineflayer');
const sleep = require('system-sleep');

const port = "25565";
const host = "play.kaboom.pw";

const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: `§§`,
    version: "1.12.2"
})

bot.on('login', () => {
    bot.chat("/prefix &4&lC&6&lO&e&lL&2&lO&3&lR &9&LB&d&lO&5&lT")
    sleep(1500)
    bot.chat("Type .help for a list of commands")
})

bot.on('chat', function(player, message) {
	let command = message.split(' ')[0].toLowerCase();
	// let input = message.slice(command.length).trim();
    if (message == ".help") {
        bot.chat(".help .join .spam .crash .leave .spammer .privacy")
    }
        if (message == ".join") {
            if (player == "93ms") {
                looping();
            }
        }
            if (message == ".crash") {
                if (player == "93ms") {
                  timeout()
                }
            }
            if (message == ".leave") {
                    if (player == "93ms") {
                        process.exit(0)
                    }
                }
                    if (command == ".spammer") {
                        if (public == true) {
                            bug = message.split(" ")
                            if (bug[1]) {
                                spam = bug[1]
                                toggling();
                            } else {
                                spam = "AnarchySpammer"
                                toggling();
                            }
                        }
                    }
                        if (message == ".privacy") {
                            if (player == "93ms") {
                                publicing()
                            }
                        }
})

var toggleable = true
var value = false
function toggling() {
    if (toggleable && value) {
        value = false
        toggleable = true
    } else if (toggleable) {
        value = true
        toggleable = true
    }
    toggleable = true
}

var toggley = true
var public = false
function publicing() {
    if (toggley && public) {
        public = false
        toggley = true
    } else if (toggley) {
        public = true
        toggley = true
    }
    toggley = true
}

bot.on('chat', function(message) {
    if (value == true) {
        bot.chat(spam + " » " + name(24))
    }
})

function looping() {
    const loopa = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopbing() {
    const loopb = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopcing() {
    const loopc = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopding() {
    const loopd = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopging() {
    const loopg = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })  
}

function loopsing() {
    const loops = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopxing() {
    const loopx = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function loopzing() {
    const loopz = mineflayer.createBot({
        host: host,
        port: port,
        username: `§${color(1)}${gen(5)} §${color(1)}${name(5)}`,
        version: "1.12.2"
    })
}

function timeout() {
    setTimeout(function () {
        looping();
        loopbing();
        loopcing();
        loopding();
        loopging();
        loopsing();
        loopxing();
        loopzing();
        timeout()
    }, 10);
}

function color(length) {
  var result           = '';
  var characters       = "0123456789abcde";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function gen(length) {
  var result           = '';
  var characters       = "0123456789";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function name(length) {
  var result           = '';
  var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!$%^*_-+\/'.,";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}