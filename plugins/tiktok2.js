/*const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
📤 *Url:* ${url}
🚀 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ''}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler

const hxz = require("hxz-api")
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
let p = await  hxz.ttdownloader(args[0])
const { nowm, wm, audio } = p
// made by arietube
 conn.sendFile(m.chat, nowm, 'tiktok.mp4', `*${global.wm}*`, m)
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok2|tiktokdl2)$/i
handler.limit = true

module.exports = handler*/


const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    m.reply('1 Limit Digunakan')
m.reply('Tunggu bro Emang Agak Lama Sih')
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    m.reply('Sedang diproses...')
    conn.sendFile(m.chat, url, 'tiktok.mp4', `🔗 *Url:* ${url}\n🧏 *Nickname:* ${nickname}\nDescription:* ${description}
`.trim(), m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tik|tt|tiktok)$/i
handler.limit = true
module.exports = handler


