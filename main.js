const { WAConnection, MessageType, Mimetype, Presence, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const spin = require('spinnies')
const fs = require("fs-extra")
const spinner = { "interval": 120, "frames": ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
const info = (id, text) => {
 spins.update(id, {text: text})
}
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})
}
const close = (id, text) => {
spins.fail(id, {text: text})
}
const figlet = require('figlet')
const { sleep } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'


        require('./nino.js')
        nocache('../nino.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
        nocache('../message/group.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
         
        const starts = async (nino = new WAConnection()) => {
        nino.version = [2, 2119, 6];
        nino.logger.level = 'warn'
        console.log(color(figlet.textSync('NinoBot', { font: 'Standard', horizontalLayout: 'default', vertivalLayout: 'default', width: 80, whitespaceBreak: false }), 'cyan'))
        console.log(color('[NINO]', 'cyan'), color('Owner is online now!', 'green'))
        console.log(color('[NINO]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'green'))
        nino.browserDescription = ["NINO - BOT", "Firefox", "3.0.0"];
        nino.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
})

        fs.existsSync(`./${setting.sessionName}.json`) && nino.loadAuthInfo(`./${setting.sessionName}.json`)
        nino.on('connecting', () => {
        start('2', 'Connecting...')
})
        nino.on('open', () => {
        success('2', 'Connect, Welcome Owner')
})
        await nino.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(nino.base64EncodedAuthInfo(), null, '\t'))
        
        nino.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	    global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
        if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
})
	    global.batrei = global.batrei ? global.batrei : []
		nino.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
})
  
        nino.on('group-participants-update', async (anu) => {
		await welcome(nino, anu)
})

        nino.on('chat-update', async (message) => {
        require('./nino.js')(nino, message)
})
}

        starts()