let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/randomimg/loli'
    conn.sendButtonImg(m.chat, api-hyzer, 'Random Loli', wm2, 'Menu', '.menu', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.limit = true

module.exports = handler
