let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i
handler.private = true
handler.limit = 3
module.exports = handler
