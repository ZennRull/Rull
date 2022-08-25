let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming4 PixelBot'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/naruto?text=${response[0]}`
  conn.sendFile(m.chat, res, 'pixelbot.jpg', `© P I X E L   B O T`, m, false)
}
handler.help = ['flaming9'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming9)$/i

module.exports = handler
