const fs = require('fs')

const configFile = fs.readFileSync('config.json', 'utf8')
const config = JSON.parse(configFile)

console.log(config)


