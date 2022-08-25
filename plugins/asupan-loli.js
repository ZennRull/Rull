let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/loli'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i
handler.private = true
handler.limit = 3
module.exports = handler
