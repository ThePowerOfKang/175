let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
Bot Ini Menggunakan Script Private.

Jika Anda Ingin Membuat Bot Seperti Ini Anda Bisa Menggunakan Script Asli Bot Ini.
Original 
https://github.com/FokusDotId/Family-MD.git
pliss follow dan kasih ✨⭐⭐🌟 !!!
Github Creator : https://github.com/FokusDotId

My github : https://github.com/hdiiofficial

Dont forget to follow me on github
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


