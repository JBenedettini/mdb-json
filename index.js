const jsonParser = require('hjson');
const { exec } = require('child_process')

const parseMDB = (file, table) => {
    return new Promise((resolve, reject) => {
        exec(`mdb-json ${file} ${table}`, (err, stdout, stderr) => {
            if(err) return reject('Invalid Table or JSON')
            if(stderr) return reject('Invalid Table or JSON')
            const jsonData = jsonParser.parse('[' + stdout + ']');
            resolve(jsonData)
        })
    })
}

module.exports = { parseMDB }