let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/Indonesia'
conn.sendFile(m.chat, supa, null, 'PixelBot', m)
}
handler.help = ['negarasendiri']
handler.tags = ['asupan']
handler.command = /^(negarasendiri)$/i
handler.private = true
handler.limit = 3
module.exports = handler
