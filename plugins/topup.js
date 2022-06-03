const hikki = require('hikki-me');
// jika error fix sendiri disini cuma ngasih bayangan ini gw buat se simple mungkin
let handler = async (m, {conn, args, command}) => {
    if (/psatir/i.test(command)) {
        try {
    const did = args[0];
    const amount = args[1];
    if (!did || !amount) return m.reply('format uknown')
    const beliau = await hikki.game.topupFreeFire(did, amount)
    const epep = await hikki.game.payDiamond(beliau, '08953225697662')
    conn.sendMessage(m.chat, { image: epep.qrCode, caption: `\`\`\`${beliau}\`\`\`` })
        } catch (e) {
            m.reply('Beliau Kocak Geming')
        }
} else
    if (!args[0]) throw 'Masukan ID terlebih dahulu!';
    const id = args[0]
    const diamond = await hikki.game.nickNameFreefire(id);
    if (!diamond) throw 'Tidak dapat menemukan id yang sama';
    const sections = [
        {
          title: 'List Diamond Free Fire',
          rows: [
            { title: '5 Dm', rowId: `#psatir ${id} 5` },
            { title: '12 Dm', rowId: `#psatir ${id} 12` },
            { title: '70 Dm', rowId: `#psatir ${id} 70` },
            { title: '140 Dm', rowId: `#psatir ${id} 140` },
            { title: '355 Dm', rowId: `#psatir ${id} 355` },
            { title: '720 Dm', rowId: `#psatir ${id} 720` },
          ]
        }
      ]
    const listMessage = {
        text: 'Top Up Free Fire', 
        footer: 'USer Info:\n' + 'NickName: '+ diamond.userName + '\n' + 'Id: '+ id + '\n' + 'Lanjutkan dengan menekan tombol dibawah ini',
        buttonText: "Ayuk Top Up",
        sections
      }
       conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { forwardingScore: 99999, isForwarded: true }}) 
}
handler.tags = ['topup']
handler.command = /^\/(topup|psatir)/i
handler.help = ['topup'].map(x => x + '')
module.exports = handler