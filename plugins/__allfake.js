let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')

let handler = (m) => m
handler.all = async function (m) {
  let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
  try {
    pp = await this.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  } finally {
    global.axios = require('axios')
    global.request = require('request')
    global.users = global.db.data.users[m.sender]
    global.chats = global.db.data.chats[m.chat]
    const _uptime = process.uptime() * 1000
    global.u = await conn.clockString(_uptime)
    global.ucapan = ucapan()
    global.settings = global.db.data.settings
    global.pickRandom = pickRandom
    global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
    global.img = pickRandom(global.waifu)
    global.fla = pickRandom(global.flaaa)
    global.namabot = conn.user.name
    global.packname = global.namabot
    global.author = global.data.owner
    //global.author = 'hdiiofficial'
    global.wm2 = global.data.namabot + ' ' + global.data.owner
    global.wm = 'hdiiofficial Bot'
    global.colong1 = 'WhatsApp Bot'
    global.colong2 = 'by hdiiofficial'
    global.kontak2 = [
    ['6285701399751', 'hdiiofficial', 'Owner Bot', 'hdiiofficial.bot@gmail.com', true],
    ]
    global.kontakseller = [
    ['13364174578', 'Verdi', 'Admin 1', 'Admin.hdioofficial@gmail.com', true],
    ]
    global.bg = await (await fetch(img)).buffer()
    global.time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')

    global.ftroli = {
      key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' },
      message: {
        orderMessage: {
          itemCount: 9999999999999999999999999999999999999999999999999999999,
          status: 1,
          surface: 1,
          message: wm,
          orderTitle: wm,
          sellerJid: '0@s.whatsapp.net',
        },
      },
    }
    global.fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: wm,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
          jpegThumbnail: require('fs').readFileSync('./src/logo.jpg'),
          thumbnail: require('fs').readFileSync('./src/logo.jpg'),
          sendEphemeral: true,
        },
      },
    }
    global.adReply = {
      contextInfo: {
	forwardingScore: 9999,
	isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
	externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
		title: "hdiiofficial",
		body: wm,
		previewType: "PHOTO",
		thumbnail: await (await fetch(img)).buffer(),
		//sourceUrl: 'https://wa.me',
	     }
        }
     }
    // Tambahin ya
  }
}

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
