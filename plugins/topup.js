let hikki = require("hikki-me")
let handler = async (m, { conn, args, text }) => {
try {
id = text.split('|')[0]
jumlah = text.split('|')[1]
ff = await hikki.game.nickNameFreefire(id) 
const topup = async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire(id, jumlah) 
return await hikki.game.payDiamond(makeSession, '0895410636348')
}
const top = await topup() 
conn.sendFile(m.chat, top.qrCode, 'Qris.jpg', 'Payment : ${top.paymentMethod}\nId : ${id}\nJumlah : ${jumlah} Diamond\nScan & Bayar Maksimal 30 detik setelah qr ini keluar', m)
} catch (e) { return reply(`Sistem Error atau Nominal Diamond/Id\nUser Tidak Ada\nList Nominal Diamond\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\n720 Dm`) }
}
handler.help = ['topupff id|jumlah']
handler.tags = ['topup']
handler.command = /^topupff$/i
handler.rowner = true

module.exports = handler
