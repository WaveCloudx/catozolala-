const { Telegraf } = require("telegraf");
require("./config");

const bot = new Telegraf(TOKEN_TELEGRAM);

bot.telegram.sendMessage(CHAT_ID, "🚀 Bot Telegram di Vercel sudah aktif!")
  .catch(error => console.error("Gagal mengirim pesan:", error));

bot.start((ctx) => ctx.reply("Bot Telegram berjalan di Vercel 🚀"));
bot.help((ctx) => ctx.reply("Kirim pesan apa saja, saya akan membalasnya!"));

bot.on("text", (ctx) => {
  ctx.reply(`Anda mengirim: ${ctx.message.text}`);
});

module.exports = async (req, res) => {
    if (req.method === "POST") {
        try {
            await bot.handleUpdate(req.body);
            res.status(200).send("OK");
        } catch (error) {
            console.error("Error handling update:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.status(405).send("Method Not Allowed");
    }
};