const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone');
const colors = require('colors');
const fs = require('fs');
const ytdl = require('ytdl-core');
const ytsr = require('ytsr');

const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
        headless: true,
        args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
    },
    authStrategy: new LocalAuth({ clientId: "client" })
});
const config = require('./config/config.json');

client.on('qr', (qr) => {
    console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Scan the following QR:`);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.clear();
    const consoleText = './config/console.txt';
    fs.readFile(consoleText, 'utf-8', (err, data) => {
        if (err) {
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Text console not found!`.yellow);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is ready!`.green);
        } else {
            console.log(data.green);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is ready!`.green);
        }
    })
});

client.on('message', async (message) => {
    let query = message.body;
    let chatId = message.from;
    let isGroups = message.from.endsWith('@g.us') ? true : false;
    if ((isGroups && config.groups) || !isGroups) {
        try {
            client.sendMessage(chatId, 'Message received! Searching for YouTube video...');
            const filters = await ytsr.getFilters(query);
            const filter = filters.get('Type').get('Video');
            const searchResults = await ytsr(filter.url, { limit: 1 });
            const videoId = searchResults.items[0].id;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            if (ytdl.validateURL(videoUrl)) {
                client.sendMessage(chatId, 'Video found! Downloading and transcoding video...');
                ytdl(videoUrl, { filter: 'audioonly', format: 'mp3', quality: 'highest' }).pipe(fs.createWriteStream(`./database/${searchResults.items[0].title}.mp3`)).on('finish', async () => {
                    const media = await MessageMedia.fromFilePath(`./database/${searchResults.items[0].title}.mp3`);
                    media.filename = `${searchResults.items[0].title}.mp3`;
                    await client.sendMessage(chatId, media, { sendMediaAsDocument: true });
                    client.sendMessage(chatId, 'Audio sent successfully!');
                }).on('error', (err) => {
                    console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Error while streaming video: ${err.message}`.red);
                    client.sendMessage(chatId, 'Video not found!');
                });
            }
        } catch (err) {
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Error while searching or downloading video: ${err.message}`.red);
            client.sendMessage(chatId, 'Video not found!');
        }
    }
});

client.initialize();
