const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923017616186"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'aliasgher7616@gmail.com'
global.github = 'https://github.com/aliasgherofficial/XLICON-MD'
global.location = 'RYK'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923017616186' 
global.devs = '923017616186';
global.website = 'https://github.com/aliasgher76/XLICON-MD' //wa.me/+923017616186
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/80ea336860e86084db365.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlFTGZxS1kyTVNhT2UxemNPRTdxSkJDNUc2dHowQzR1QWhneWFVTG9uOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFJNdW5KdEF2UWdaazc2M3JaRHJGU1Ywdm00NlFOTWRBdWFSRWZoNi9DTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTlJzUG9tOEM3V2VDSFlJeXpjeTVXVXFFSHpId2ZvVndNWENYSGgzdkV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYckNhUFJaVVJRNGVzeEVFYUJVU0JuaTliQUdobjFpcEswZXBsMjdyNlMwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPbWpWWjBwY1ZWa2FQRVpyWmVaaGpKZFRvSlA5eTR6SUlJNzdRVXFUbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhzUzVKbGt6UndxTGlRcWl6Wk9FajI1Y2JZN25zK3hzb0tsN25xZGtBekU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQzhpZEhyMXhTU0sxdGVtblJmYUdCK1FNNHpLWEtka2U1cTlXL0tYTkgvNVhKcUdJbVNCZ0xsQVdLNnVJSnptRElxaURGNCt3clBjTWdXWWJZTFFpZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNSwiYWR2U2VjcmV0S2V5IjoiV0laUngzbXhHZlFZUzB4UFE5eDNQWm5FNmdrS3JPMDJXOWZkekl5Qk9MOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic1BxRGJqWXZSUEMzR2hrZkZRejJTZyIsInBob25lSWQiOiI0OTg3MDYyMi0xYWJkLTQwYTktOWM3MS05ZTQxZWVlOTg0ZTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1c1T05FTjl2SHRMMEc0azVTOUN0Qi9ZV09NPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsLzNpZ0pvRVRYaFppTDZsZDkwMWxweWxxaHc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSy82TFFDRU1qK3I2a0dHQWc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjR0Mm5BZlZyLzRFOUdTZWNIMWZBbmdHdzB1SmRyUi92OVkzbGNIZjRwUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5Sb1paL0VxNXQxT1VETkVRa3VGYmpTTHp0SUFxdmVQeDYwaDhmeWFJZ1BMSzd3UGtabENyL0pKaEdsMVRNNVVFVG1oOWF2Yk91VmVubmRtOVlzUUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzc0NQekdyNU55VEhhNUZNd0tEdVdsNjVseW81eTNaRXFBSjBpTVZia2R6cGRGU1RrS2JCZWhNdTQxSm9jNGdGS2IrVWtEOUhXNmxUZjhhNFRqaCtpdz09In0sIm1lIjp7ImlkIjoiOTIzMDE3NjE2MTg2OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKCiuKOr+qvrcy92b7ZgNmA2ZHZks2i2LHZiNmB24zZgNmA2ZHZks2i2LPZgNiU2LHijq/qr63MvSDYudmA2Y3ZgNmY2YTbjCBcblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cbjwzIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAxNzYxNjE4NjoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTGRwd0gxYS8rQlBSa25uQjlYd0o0QnNOTGlYYTBmNy9XTjVYQjMrS1VZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3MzgyMjIwfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'PROFESSOR',
  packname:  process.env.PACK_NAME || 'MADE BY ALIASGHER',
   
  botname:   process.env.BOT_NAME === undefined ? "PROFESSOR" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ALI-ASGHER' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
