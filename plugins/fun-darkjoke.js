let handler = async (m, { conn }) => {
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.sendButtonImg(m.chat, rest, 'Kalau Gambar Kosong Berarti Error', wm2, 'Kembali Ke Menu', '.menu', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
