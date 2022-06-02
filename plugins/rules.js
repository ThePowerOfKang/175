
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 R U L E S 」
│ DILARANG SARA.
│ DILARANG MENGHINA BOT.
│ BOT HANYA 1 DALAM 1 GROUP.
│ JIKA KAMI MENDETEKSI TERDAPAT
│ BOT LAIN DALAM GROUP 
│ BOT AKAN KELUAR DARI GROUP
│ BOT TIDAK BERTANGGUNG JAWAB
│ ATAS PERINTAH YANG ANDA BERIKAN
│ BOT TIDAK MENYIMPAN DATA ATAU MEDIA
│ YANG ANDA BERIKAN PADA BOT INI.
│ BOT 1000% MENJAGA PRIVASI USER.
╰────

Note:Jika Melanggar Akan Di Banned, tidak ada refund uang sewa.
`.trim(), wm, 'MENU BOT', '.menu', global.ftroli) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
