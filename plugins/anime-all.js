let handler = async (m, { conn, command }) => {
let nyenye = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendButtonImg(m.chat, nyenye, 'Done ~', wm2, 'N e x t', `.${command}`, m) 
}
handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay']
handler.tags = ['anime']
handler.command = /^(akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kaori|keneki|kotori|kurumi|madara|mikasa|miku|minato|naruto|nezuko|sagiri|sasuke|sakura|cosplay)$/i
handler.private = true
handler.limit = true 
//by PixelBot
module.exports = handler
