let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@ventas_bot.thezero* ${pesan}`
let teks = `*𝙂𝘼𝘽𝙄 𝙓 𝙉𝘼𝙔𝙀 𝙇𝙀𝙎 𝙋𝙄𝘿𝙀 𝙌𝙐𝙀 𝘿𝙀𝙎𝙋𝙄𝙀𝙍𝙏𝙀𝙉💦*\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `🔅❖≽   @${mem.id.split('@')[0]}\n`}
teks += `*🐾𝙂𝘼𝘽𝙄 𝙓 𝙉𝘼𝙔𝙀*\n\n*Naye <3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
