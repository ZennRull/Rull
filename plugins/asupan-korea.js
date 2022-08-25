let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/korea'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['negaratetangga4']
handler.tags = ['asupan']
handler.command = /^(negaratetangga4)$/i
handler.private = true
handler.limit = 3
module.exports = handler
