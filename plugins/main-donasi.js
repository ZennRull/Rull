let handler = async m => m.reply(`
╭─「 Donasi •Indosat」
│ •  [085607831415]
╰────
╭─「 Donasi •Saweria 」
│ •  [-]
╰────
╭─「 Donasi • Dana 」
│ •  [085607831415]
╰────

Nomor owner utama https://wa.me/6285746030186

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
