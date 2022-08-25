let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(global.wait)
m.reply(`
──[ *LAGI AFK !* ]──✧
┆ *Nama* : ${conn.getName(m.sender)}
┆ *Alasan* : ${text ? '' + text : ''}
╰┅────★
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]
