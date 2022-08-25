let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/malaysia'
conn.sendFile(m.chat, supa, null, '© By PixelBot', m)
}
handler.help = ['negaratetangga3']
handler.tags = ['asupan']
handler.command = /^(negaratetangga3)$/i
handler.limit = 3
handler.private = true
module.exports = handler
