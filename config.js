global.you = ['6281229393997'] 
//Developer Bot
global.gc = 'https://chat.whatsapp.com/I5Kz3Abawc5DqyBSDoYvKB'
global.rowner = ['6281229393997'],['628816004278'] // Real Owner Bot
global.owner = ['6281229393997'],['628816004278'] // Owner Bot
global.police = ['6281229393997'],['628816004278'] // Police Bot
global.mods = ['6281229393997'],['628816004278']  // Want some help?
global.prems = ['6281229393997'],['628816004278'] // Premium user has unlimited limit
global.fotonya1 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini kalo mau di ganti silahkan ganti aja
global.fotonya2 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //gw lupa nih foto apa aja:v
global.fotonya3 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya4 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya5 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya6 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini ganti pakai foto sosialmedia mu
global.fotonya7 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg'
global.instagram = 'https://instagram.com/_zex87'

global.helper = ['6281229393997'],['6281348106274']
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/1a432751096d4d399a8c4.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/b4faf138934c31dee4dc0.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

// Sticker WM
global.packname = 'koko yura✞︎'
global.author = 'yura is here'
global.wm = '© yura ✞︎'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})