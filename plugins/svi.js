const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan di spam\n\n*Contoh:*\n.spam 6285xxxxxxxx', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 WA SPAMMER 」*\n\nPELAKU SPAM : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n\nBukan salah gw ya bang\nGw cuman BOT`

    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
    conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
   
    m.reply(`Berhasil mengirim spam ke nomor ${korban} 10 kali`)
}
handler.help = ['svi nomor', 'spamvirtex nomor']
handler.tags = ['owner']
handler.command = /^(svi|spamvirtex)$/i
handler.rowner = true

module.exports = handler
