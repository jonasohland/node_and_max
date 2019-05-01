const TelegramBot = require('node-telegram-bot-api');
const Max = require('max-api');

var bot = new TelegramBot(require("./creds.json").token, { polling: { autoStart: true, interval: 100 } });

bot.on('message', (msg) => {
    Max.outlet('bang');
});
