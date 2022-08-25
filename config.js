//=============『 Utama 』================== //
global.owner = ['6285746030186', '6285607831410']
global.mods = ['0'] 
global.prems = [''] 

//=============『 Info Owner 』============== //
global.nameowner = 'Nama Owner'
global.numberowner = '6285746030186' \\ Nomor Kamu //
global.instagram = '-'
global.github = '-'
global.dana = '-'
global.pulsa = '-'
global.gopay = '-'

//=============『 Info Bot 』=================//
global.namebot = 'Nama Bot'
global.gc = 'https://t.me/pixelbotwhatsapp'
global.web = 'https://t.me/pixelbotwhatsapp' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 15K\n2 Minggu 10K\n1 Minggu 5K'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/ddd9322634f99a534188c.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/ddd9322634f99a534188c.jpg' //ini juga ganti 
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '❍⌇─➭ PixelBot'
global.watermark = wm
global.wm2 = '⫹⫺ PixelBot'
global.wm3 = '❍⌇─➭ PixelBot'
global.wm4 = 'Ⓛ = Limit Ⓟ = Premium'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://database.tioclkp02.repl.co/TextPro.me_162df9a5371cb2.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.wait = '_*Loading...*_'
global.stiker_wait = '*「 Sticker sedang dibuat 」*'
global.packname = 'By PixelBot\nTelegram:'
global.author = 'PixelBot\nhttps://t.me/pixelbotwhatsapp'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  amel: 'https://melcanz.com',
  sekhaAPIs: 'https://sekha.tech',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': '7ef377abf72279f4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://sekha.tech': 'apirey'
}

//=============『 RPG GAMES 』================== //
global.multiplier = 20 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
