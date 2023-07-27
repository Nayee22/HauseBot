let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*𝐇𝐚𝐮𝐬𝐞 𝐁𝐨𝐭* ${pesan}`
let teks = `*𝙃𝘼𝙐𝙎𝙀 𝘽𝙊𝙏 , 𝙈𝘼𝙉𝘿𝘼 𝘼 𝙌𝙐𝙀 𝘿𝙀𝙅𝙀𝙉 𝘿𝙀 𝙇𝙇𝙊𝙍𝘼𝙍 𝙋𝙊𝙍 𝙀𝙇 𝙀𝙓😼*\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `💌❖   @${mem.id.split('@')[0]}\n`}
teks += `*𝐇𝐚𝐮𝐬𝐞 𝐁𝐨𝐭*\n\n*El Mejor Bot de Do Mundo*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
