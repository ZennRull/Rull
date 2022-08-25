
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|ihacoy', m)
    if (!pesan) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|ihacoy', m)
    if (text > 500) return conn.reply(m.chat, 'Pesan Kamu Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 Pesan Masuk 」*\n\nDari : ???\nPesan : ${pesan}\n\nNote: Pesan ini dari seseorang, bot hanya menyampaikan pesan saja`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['menfess nomor|pesan']
handler.tags = ['main']
handler.command = /^(menfess|confess|menfes|confes)$/i

handler.limit = true
handler.private = true
handler.premium = true

module.exports = handler
