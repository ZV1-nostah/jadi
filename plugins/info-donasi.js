let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Telkomsel : 6281229393997
⫹⫺ Via Dana : 6281229393997
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/ibnubotz87

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
