let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'By PixelBot', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i
handler.private = true
handler.limit = 3
module.exports = handler
