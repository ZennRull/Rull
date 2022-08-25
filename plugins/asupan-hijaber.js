let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/hijaber'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['tudung']
handler.tags = ['asupan']
handler.command = /^(tudung)$/i
handler.private = true
handler.limit = 3
module.exports = handler
