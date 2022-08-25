let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/japan'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['negaratetangga5']
handler.tags = ['asupan']
handler.command = /^(negaratetangga5)$/i
handler.private = true
handler.limit = 3
module.exports = handler
