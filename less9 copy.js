const zero = new Promise((res) => {
    console.log('start zero');
    setTimeout(() => {
        console.log('zero');
        res(true);
    }, 2000);
})
 

function first(callback) {
        console.log('start first');
        setTimeout(() => {
            console.log('first');
            callback()
        }, 2000)
}


zero
    .then((res) => first())
    
// function second() {
//     console.log('start second');
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('second');
//             res();
//         }, 2000);
//     })
// }

// function third() {
//     console.log('start third');
//     return Promise.resolve('third')
//         .then((text) => console.log(text))
// }

// function fourth(callback) {
//     console.log('start fourth');
//     setTimeout(() => {
//         console.log('fourth');
//         callback()
//     }, 2000)
// }

// async function fifth() {
//     console.log('start fifth');
//     console.log('fifth');
// }


