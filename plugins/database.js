let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Jumlah User Di Database ${totalreg} user*\n*Pengguna Terverifikasi ${rtotalreg} user*`
    await conn.sendButtonLoc(m.chat, await(await require('node-fetch')(fla + `${command}`)).buffer(), kon, wm, 'Menu', '.menu', m)
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

module.exports = handler
