const fs = require('fs-extra')
let path1 = './folder1'
let path2 = './folder2'



function n(path1, path2, callback) {
    callback(path1, path2);
}

n(path1, path2, () => {
    fs.mkdir(path1, (path1) => {
        fs.createFile(`${path1}/nfile.txt`, (path2) => {
            fs.mkdir(path2, (path1, path2) => {
                fs.move(`${path1}/nfile.txt`, `${path2}/nfile.txt`, (path2) => {
                    fs.remove(`${path2}/nfile.txt`, (path1) => {
                        fs.remove(path1, (path2) => {
                            fs.remove(path2, () => {
                            console.log('7');
                            })
                        })        
                    })
                })
            })
        // })
//     })
// })
