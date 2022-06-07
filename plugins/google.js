let handler = async (m, {
    conn, usedPrefix, command, q, args
}) => {
    const ggs = require('google-it')
    text = args.join(' ')
    if (!text) throw `Example: ${usedPrefix + command} Bot WhatsApp`
    m.reply(global.wait)
    resss = await ggs({
        'query': `${text}`
    })
    kant = ``
    for (let i of resss) {
        kant += `\n*▢ Judul* : ${i.title}
        *▢ Link* : ${i.link}
        *▢ Keterangan* : ${i.snippet}\n\n─────────────────────────\n`
    }
    var akhir = kant.trim()
    conn.reply(m.chat, akhir, global.ftroli)
}

handler.help = ['google']
handler.tags = ['internet']
handler.command = ['google']
handler.limit = false
handler.register = true

module.exports = handler
