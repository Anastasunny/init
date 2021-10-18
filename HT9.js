
const fs = require('fs-extra')

function n(callback) {
    callback();
}

n(() => {
    fs.mkdir('./folder1', () => {
        fs.createFile('./folder1/nfile.txt', () => {
            fs.mkdir('./folder2', () => {
                fs.move('./folder1/nfile.txt', './folder2/nfile.txt', () => {
                    fs.remove('./folder2/nfile.txt', () => {
                        fs.remove('./folder1', () => {
                            fs.remove('./folder2')
                        })        
                    })
                })
            })
        })
    })
})
