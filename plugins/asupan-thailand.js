let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/thailand'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['negaratetangga1']
handler.tags = ['asupan']
handler.command = /^(negaratetangga1)$/i
handler.private = true
handler.limit = 3
module.exports = handler
