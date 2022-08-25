let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/cecan'
conn.sendFile(m.chat, supa, null, '© By PixelBot', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.private = true
handler.limit = 3
module.exports = handler
