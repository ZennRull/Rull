let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Blimit = 50000
const Sgold = 3000
const Bgold = 6000
const Bstring = 500
const Sstring = 200
const Bbatu = 500
const Sbatu = 200
const Bkayu = 500
const Skayu = 200
const Sarloji = 9000000
const Biron = 800
const Siron = 700
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2500 
const Smythic = 900
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bjagung = 20
const Bjeruk = 20
const Bapel = 20
const Bmangga = 20
const Banggur = 20
const Sjagung = 100
const Sjeruk = 100
const Sapel = 100
const Smangga = 100
const Sanggur = 100
const Baqua = 50
const Bumpan = 150
const Bkucing = 5
const Banjing = 5
const Bkuda = 7
const Bfox = 10
const Bserigala = 10
const Bphonix = 20
const Bcentaur = 35
const Bgriffin = 35
const Bnaga = 1000
const Bfood = 500
const Bpet = 1500
const Spet = 750
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const uparmor = (_armor == 0 ? 'Kamu belum mempunyai Armor' : '' || _armor == 1 ? 135 : '' || _armor == 2 ? 175 : '' || _armor== 3 ? 250 : '' || _armor == 4 ? 320 : '')
    const _pancing = global.db.data.users[m.sender].pancing
    const pancing = (_pancing == 0 ? 1700 : '' || _pancing == 1 ? 3000 : '' || _pancing == 2 ? 5500 : '' || _pancing == 3 ? 10500 : '')
    const uppancing = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 25 : '' || _pancing == 2 ? 55 : '' || _pancing == 3 ? 75 : '')
    const durfishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 50 : '' || _pancing == 2 ? 70 : '' || _pancing == 3 ? 100 : '')
    const refishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 35 : '' || _pancing == 3 ? 65 : '')
    const drefishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 25 : '' || _pancing == 3 ? 40 : '')
    
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
    const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
    const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pikaxe == 4 ? 100 : '')
    const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pikaxe == 4 ? 100 : '')
    const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pikaxe == 4 ? 60 : '')
    
    const _sword = global.db.data.users[m.sender].sword
    const sword = (_sword == 0 ? 1700 : '' || _sword == 1 ? 3000 : '' || _sword == 2 ? 5500 : '' || _sword == 3 ? 10500 : '' || _sword == 4 ? 27000 : '')
    const upsword = (_sword == 0 ? 0 : '' || _sword == 1 ? 15 : '' || _sword == 2 ? 40 : '' || _sword== 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dursword = (_sword == 0 ? 0 : '' || _sword == 1 ? 40 : '' || _sword == 2 ? 60 : '' || _sword == 3 ? 80 : '' || _sword == 4 ? 100 : '')
    const resword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 35 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dresword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 25 : '' || _sword == 3 ? 40 : '' || _sword == 4 ? 60 : '')
    
    let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
      🅿︎ 🅸︎ 🆇︎ 🅴︎ 🅻︎   🅱︎ 🅾︎ 🆃︎

*🎒 SHOP*

ʙᴇʟɪ ʟɪᴍɪᴛ ᴋᴇᴛɪᴋ .sʜᴏᴘ2 ʙᴜʏ ʟɪᴍɪᴛ (ᴊᴜᴍʟᴀʜ)
ᴄᴏɴᴛᴏʜ: .sʜᴏᴘ2 ʙᴜʏ ʟɪᴍɪᴛ 1

*🧪 Penggunaan :*
_${usedPrefix}shop <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${usedPrefix}shop buy potion 1*_

*📮 Note :* 
bila sudah tidak ada harganya, berarti sudah tidak bisa dibeli / sudah level max

🛍️ List Barang:
━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga beli*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${potion}
*🍶 Aqua:* ${Baqua}
*🪙  Gold :* ${Bgold}
*💎 Diamond:* ${Bdiamond}
*🪨 Batu:* ${Bbatu}
*🪵 Kayu:* ${Bkayu}
*🕸️ String:* ${Bstring}
*⛓️ Iron:* ${Biron}
*🗑️ Sampah:* ${Bsampah}

*📦 Common:* ${Bcommon} 
*🛍️ Uncommon:* ${Buncommon}
*🎁 Mythic:* ${Bmythic}
*🧰 Legendary:* ${Blegendary}
*📫 Pet:* ${Bpet}

*🥼 Armor:* ${armor}
*🎣 Fishingrod:* ${pancing}
*🪱 Umpan:* ${Bumpan}

*🌾 Bibit mangga:* ${Bjagung}
*🌾 Bibit apel:* ${Bapel}
*🌾 Bibit jeruk:* ${Bjeruk}
*🌾 Bibit pisang:* ${Bapel}
*🌾 Bibit anggur:* ${Banggur}

━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga Jual*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${Spotion}
*🪙 Gold:* ${Sgold}
*🧭 Arloji:* ${Sarloji}
*🪨 Batu:* ${Sbatu}
*🪵 Kayu:* ${Skayu}
*🕸️ String:* ${Sstring}
*⛓️ Iron:* ${Siron}
*💎 Diamond:* ${Sdiamond}
*🗑️ Sampah:* ${Ssampah}

*📦 Common:* ${Scommon}
*🛍️ Uncommon:* ${Suncommon}
*🎁 Mythic:* ${Smythic}
*🧰 Legendary:* ${Slegendary}
*📫 Pet:* ${Spet}

*🥭 Mangga:* ${Sjagung}
*🍎 Apel:* ${Sapel}
*🍊 Jeruk:* ${Sjeruk}
*🍌 Pisang:* ${Sapel}
*🍇 Anggur:* ${Sanggur}

━━━━━━━━━━━━━━━━━
*🦊 Pet.      | 💲 Harga Beli*
━━━━━━━━━━━━━━━━━
*🐱 Kucing:* ${Bkucing} 🪙
*🐶 Anjing:* ${Banjing} 🪙
*🦊 Fox:* ${Bfox} 🪙 
*🐴 Kuda:* ${Bkuda} 🪙 
*🐺 Serigala:* ${Bserigala} 🪙
*🦜 Phonix:* ${Bphonix} 🪙
*🐎 Centaur:* ${Bcentaur} 🪙
*🦅 Griffin:* ${Bgriffin} 🪙
*🐉 Naga:* ${Bnaga} 🪙

*🥩 Foodpet:* ${Bfood} 💲

━━━━━━━━━━━━━━━━━
*🔨 Upgrade & Repair | 💲 Harga*
━━━━━━━━━━━━━━━━━
*◪ Upgrade ⏫*

*🥼 Armor:* ${uparmor} 💎 ${_armor == 0 ? '(Belum memiliki)' : _armor == 5 ? '( *Level max* )' : ''}

*🎣 Fishingrod:* ${uppancing} 💎
╰▸ *Durability:* ${durfishingrod} ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}

*⛏️ Pickaxe:* ${uppickaxe} 💎
╰▸ *Durability:* ${durpickaxe} ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}

*🗡️ Sword:* ${upsword} 💎
╰▸ *Durability:* ${dursword} ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*◪ Repair 🔨*

*🎣 Fishingrod:* ${refishingrod} 💎 ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
╰▸ + ${drefishingrod} Durability 

*⛏️ Pickaxe:* ${repickaxe} 💎 ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
╰▸ + ${drepickaxe} Durability

*🗡️ Sword:* ${resword} 💎 ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
╰▸ + ${dresword} Durability

━━━━━━━━━━━━━━━━━
━━━━━━━━━━━━━━━━━
`.trim()
    try {
        if (/shop|toko|buy/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                	case 'kucing':
                if (global.db.data.users[m.sender].kucing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bkucing * count) {
                                global.DATABASE.data.users[m.sender].kucing += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kucing 🐱 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'anjing':
                    if (global.db.data.users[m.sender].anjing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bkucing * count) {
                                global.DATABASE.data.users[m.sender].anjing += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Anjing 🐶 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= limit * count) {
                                global.db.data.users[m.sender].money -= limit * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Limit ✨ Dengan Harga ${Blimit * count} Money 💹\n\n📍 Hemat Limit (ㆁωㆁ)*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Limit Dengan Harga ${Blimit * count} Money `,)
                        break
                    case 'kuda':
                    if (global.db.data.users[m.sender].kuda == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bkuda * count) {
                                global.DATABASE.data.users[m.sender].kuda += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bkuda * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kuda 🐴 Dengan Harga ${Bkuda * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'fox':
                    if (global.db.data.users[m.sender].rubah == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bfox * count) {
                                global.DATABASE.data.users[m.sender].rubah += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bfox * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Rubah 🦊 Dengan Harga ${Bfox * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'serigala':
                 if (global.db.data.users[m.sender].serigala == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bserigala * count) {
                                global.DATABASE.data.users[m.sender].serigala += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bserigala * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Serigala 🐺 Dengan Harga ${Bserigala * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'phonix':
                    if (global.db.data.users[m.sender].phonix == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bphonix * count) {
                                global.DATABASE.data.users[m.sender].phonix += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bphonix * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Phonix 🦜 Dengan Harga ${Bphonix * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'centaur':
                if (global.db.data.users[m.sender].centaur == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bcentaur * count) {
                                global.DATABASE.data.users[m.sender].centaur += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bcentaur* count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Centaur 🐎 Dengan Harga ${Bcentaur * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'griffin':
                 if (global.db.data.users[m.sender].griffin == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bgriffin * count) {
                                global.DATABASE.data.users[m.sender].griffin += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bgriffin * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Griffin 🦅 Dengan Harga ${Bgriffin * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
               case 'naga':
               if (global.db.data.users[m.sender].naga == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (global.DATABASE.data.users[m.sender].emas >= Bnaga * count) {
                                global.DATABASE.data.users[m.sender].naga += count * 1
                                global.DATABASE.data.users[m.sender].emas -= Bnaga * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Naga 🐉 Dengan Harga ${Bnaga * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'foodpet':
                            if (global.DATABASE.data.users[m.sender].money >= Bfood * count) {
                                global.DATABASE.data.users[m.sender].makananpet += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bfood * count
                                conn.reply(m.chat, `✔️ Sukses Membeli FoodPet 🥩 Dengan Harga ${Bfood * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Potion 🥤 Dengan Harga ${potion * count} money 💹\n\n📍 Gunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case `gold`:
                            if (global.db.data.users[m.sender].money >= Bgold * count) {
                            global.db.data.users[m.sender].money -= Bgold * count
                            global.db.data.users[m.sender].emas += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold 🪙 Dengan Harga ${Bgold * count} money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bjagung * count) {
                            global.db.data.users[m.sender].money -= Bjagung * count
                            global.db.data.users[m.sender].bibitmangga += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitapel += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Apel🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitjeruk += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Jeruk🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                     case 'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitpisang += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Pisang🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitanggur += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Anggur🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Diamond 💎 Dengan Harga ${Bdiamond * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'batu':
                           if (global.db.data.users[m.sender].money >= Bbatu * count) {
                               global.db.data.users[m.sender].batu += count * 1
                               global.db.data.users[m.sender].money -= Bbatu * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Batu 🪨 Dengan Harga ${Bbatu * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'umpan':
                           if (global.db.data.users[m.sender].money >= Bumpan * count) {
                               global.db.data.users[m.sender].umpan += count * 1
                               global.db.data.users[m.sender].money -= Bumpan * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Umpan 🪱 Dengan Harga ${Bumpan * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Kayu 🪵 Dengan Harga ${Bkayu * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                     case 'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Aqua 🍶 Dengan Harga ${Baqua * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} String 🕸️ Dengan Harga ${Bstring * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'iron':
                           if (global.db.data.users[m.sender].money >= Biron * count) {
                               global.db.data.users[m.sender].iron += count * 1
                               global.db.data.users[m.sender].money -= Biron * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Iron ⛓️ Dengan Harga ${Biron * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹 \n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate 🛍️ Dengan Harga ${Buncommon * count} Money 💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic* count} Money\n\n📍 Buka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'pet':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹 `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 1) return conn.reply(m.chat, 'Kamu sudah memiliki Armor', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli Armor 🥼 Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor 🥼 Seharga ${armor} Money 💹`, m)
                        
                        break
                     case 'fishingrod':
                            if (global.db.data.users[m.sender].pancing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pancingan', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                global.db.data.users[m.sender].fishingroddurability = durfishingrod
                                conn.reply(m.chat, `✔️ Sukses Membeli Pancingan 🎣 Seharga ${pancing} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Pancingan 🎣 Seharga ${pancing} Money 💹`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Potion 🥤 Dengan Harga ${Spotion * count} Money 💹 `.trim(), m)
                        } else conn.reply(m.chat, `🥤 Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'gold':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].money += Sgold * count
                            global.db.data.users[m.sender].gold -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Gold 🪙 Dengan Harga ${Sgold * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'arloji':
                        if (global.db.data.users[m.sender].arlok >= count * 1) {
                            global.db.data.users[m.sender].money += Sarloji * count
                            global.db.data.users[m.sender].arlok -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Arloji 🧭 Dengan Harga ${Sarloji * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧭 Arloji Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Batu 🪨 Dengan Harga ${Sbatu * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪨 Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Kayu 🪵 Dengan Harga ${Skayu * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪵 Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} String 🕸️ Dengan Harga ${Sstring * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🕸️ String Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].money += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Iron ⛓️ Dengan Harga ${Siron * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `⛓️ Iron Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Common Crate 📦 Dengan Harga ${Scommon * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `📦 Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Uncommon Crate 🛍️ Dengan Harga ${Suncommon * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🛍️ Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mythic Crate 🎁 Dengan Harga ${Smythic * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Legendary Crate 🧰 Dengan Harga ${Slegendary * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧰 Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                     case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].money += Spet * count
                            global.db.data.users[m.sender].pet -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pet Crate 📫 Dengan Harga ${Spet * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `📫 Pet Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Sampah 🗑️ Dengan Harga ${Ssampah * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🗑️ Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Diamond 💎 Dengan Harga ${Sdiamond * count} Money 💹`, m)
                        } else conn.reply(m.chat, `💎 Diamond Anda Tidak Cukup `, m)
                        break
                     case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mangga 🥭 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🥭 Mangga Anda Tidak Cukup `, m)
                        break
                     case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Apel 🍎 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍎 Apel Anda Tidak Cukup `, m)
                        break
                     case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Jeruk 🍊 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍊 Jeruk Anda Tidak Cukup `, m)
                        break
                     case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Anggur 🍇 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍇 Anggur Anda Tidak Cukup `, m)
                        break
                     case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pisang 🍌 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍌 Pisang Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'upgrade': 
                switch (_type) {
                	case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`, m)
                        
                        break
                        case 'fishingrod':
                            if (global.db.data.users[m.sender].fishingrod == 4) return conn.reply(m.chat, 'Pancingan mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > uppancing) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= uppancing * 1
                                global.db.data.users[m.sender].fishingroddurability = durpancing
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`, m)
                        
                        break
                        
                            case 'sword':
                            if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Sword mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > upsword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= upsword * 1
                                global.db.data.users[m.sender].sworddurability = dursword
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`, m)
                            break
                            case 'pickaxe':
                            if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxe mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > uppickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= uppickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability = durpickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Pickaxe ⛏️ Seharga ${uppickaxe} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Pickaxe ⛏️  Seharga ${uppickaxe} Diamond 💎`, m)
                            break
                            default:
                            return conn.reply(m.chat, Kchat, m)
                            }
                            break
                            case 'repair': 
                switch (_type) {
                	case 'fishingrod':
                            if (global.db.data.users[m.sender].fishingroddurability == 80) return conn.reply(m.chat, 'Pancingan mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > refishingrod) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= refishingrod * 1
                                global.db.data.users[m.sender].fishingroddurability += drefishingrod
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎\n➕ ${drefishingrod} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎`, m)
                        
                        break
                        case 'pickaxe':
                            if (global.db.data.users[m.sender].pickaxedurability == 80) return conn.reply(m.chat, 'Pickaxe mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > repickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= repickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability += drepickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Pickaxe ⛏️ Seharga ${repickaxe} Diamond 💎\n➕ ${drepickaxe} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Pickaxe ⛏️  Seharga ${repickaxe} Diamond 💎`, m)
                        
                        break
                            case 'sword':
                            if (global.db.data.users[m.sender].sworddurability == 80) return conn.reply(m.chat, 'Sword mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > resword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= resword * 1
                                global.db.data.users[m.sender].sworddurability += dresword
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Sword 🗡️ Seharga ${resword} Diamond 💎\n➕ ${dresword} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Sword 🗡️  Seharga ${resword} Diamond 💎`, m)
                        
                        break
                            
                            default:
                            return conn.reply(m.chat, Kchat, m)
                            }
                            break
            default:
                return conn.sendBut(m.chat, Kchat,wm, 'Inventory', '.inv', m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'tprem':
                            if (global.db.data.users[m.sender].money >= Btprem * count) {
                                global.db.data.users[m.sender].tprem += count * 1
                                global.db.data.users[m.sender].money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat,m)
            }
        } else if (/up|upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`, m)
                        
                        break
                        default:
                    return conn.reply(m.chat, Kchat,m)
                         }
                    }else if (/repair/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`, m)
                        
                        break
                        default:
                    return conn.reply(m.chat, Kchat,m)
                    
                    }
            }
    } catch (e) {
        conn.reply(m.chat, Kchat,m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell | buy | upgrade | repair> <args>', 'toko <sell | buy | upgrade | repair> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual|up|upgrade|repair)$/i
module.exports = handler

let wm = global.wm
