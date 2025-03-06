require("./config.js");

const express = require("express");
const path = require("path");
const { Telegraf } = require("telegraf");

const port = 3000
const nyaa = new Telegraf(TOKEN_TELEGRAM);

const app = express();

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "1.html"));
});

app.listen(process.env.PORT || port, () => {

nyaa.telegram.sendMessage(CHAT_ID, "🚀 Sukses Menjalankan bot Telegram.... \nServer berjalan di https://abcd1234.ngrok.io", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Salin Link",
            url: "https://abcd1234.ngrok.io"
          }
        ]
      ]
    }
  }).catch(error => {
    console.error('Error sending message:', error);
  });
  
  console.log('Server berjalan pada port http://localhost:' + (process.env.PORT || port));
});