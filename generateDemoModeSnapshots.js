const fs = require('fs')

const dirs = fs.readdirSync('./snapshots')
const snapshots = dirs.reduce((acc, dirName) => {
  const files = fs.readdirSync(`./snapshots/${dirName}`)
  const context = files.reduce((acc, fileName) => {
    return Object.assign({}, acc, {
      [`${dirName}/${fileName}`]: fs.readFileSync(`./snapshots/${dirName}/${fileName}`).toString()
    })
  }, {})
  return Object.assign({}, acc, context)
}, {})
fs.writeFileSync('./src/demoModeSnapshots.json', JSON.stringify(snapshots, null, '  '))
