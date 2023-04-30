# WhatsAppSongBot
Whatsapp bot to search and transcode video request to return mp3 audio file

## Installation
* Clone Repository
  ```sh
  git clone https://github.com/Osares10/WhatsAppSongBot.git
  ```

* Go to Directory
  ```sh
  cd WhatsAppSongBot
  ```

* Install Modules
  ```sh
  npm i whatsapp-web.js qrcode-terminal moment-timezone colors fs ytdl-core ytsr
  ```
* Start
  ```sh
  node index.js
  ```
* Scan the QR Code



 ## Configuration
* [config.json](https://github.com/Osaress/WhatsAppSongBot/blob/main/config/config.json)
  ```json
  {
    "name": "WhatsAppSongBot",
    "timezone": "America/Mexico_City",
    "groups": true
  }
  ```
  * config.name : *name for the bot* (string)
  * config.timezone : *timezone displays the time at the specified location* (string)
  * config.groups : *to filter whether bots can respond to group chats or not* (boolean)
* [console.txt](https://github.com/Osaress/WhatsAppSongBot/blob/main/config/console.txt)
  ```txt

   /$$     /$$               /$$$$$$$$        /$$                 /$$$$$$$   /$$$$$$  /$$$$$$$$
  |  $$   /$$/              |__  $$__/       | $$                | $$__  $$ /$$__  $$|__  $$__/
   \  $$ /$$//$$$$$$  /$$   /$$| $$ /$$   /$$| $$$$$$$   /$$$$$$ | $$  \ $$| $$  \ $$   | $$   
    \  $$$$//$$__  $$| $$  | $$| $$| $$  | $$| $$__  $$ /$$__  $$| $$$$$$$ | $$  | $$   | $$   
     \  $$/| $$  \ $$| $$  | $$| $$| $$  | $$| $$  \ $$| $$$$$$$$| $$__  $$| $$  | $$   | $$   
      | $$ | $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$| $$_____/| $$  \ $$| $$  | $$   | $$   
      | $$ |  $$$$$$/|  $$$$$$/| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$/   | $$   
      |__/  \______/  \______/ |__/ \______/ |_______/  \_______/|_______/  \______/    |__/   
    
  ```

 ## How to Use
 * Send a search request to the bot
 * The bot will return the first result of the search in mp3 format

## Built With
* [WhatsApp-web.js](https://github.com/pedroslopez/whatsapp-web.js/)
* [QRCode-Terminal](https://www.npmjs.com/package/qrcode-terminal)
* [Moment-Timezone](https://www.npmjs.com/package/moment-timezone)
* [Colors](https://www.npmjs.com/package/colors)
* [FS](https://www.npmjs.com/package/fs)
* [YTDL-CORE](https://github.com/fent/node-ytdl-core)

## Based on

* [YouTubeDLWhatsAppBOT](https://github.com/DrelezTM/YouTubeDLWhatsAppBOT)

## License
* [License](https://github.com/Osaress/WhatsAppSongBot/blob/main/LICENSE)