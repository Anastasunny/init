let gamer1 = 'Pavel';
let gamer2 = 'Kate';

let sum1 = 0;
let sum2 = 0;

for (let i, a = 0; i <= 2, a <= 2;) {
    sum1 += getRandomIntInclusive(1, 6); 
    i++
    sum2 += getRandomIntInclusive(1, 6); 
    a++
    console.log(sum1, sum2);
}

console.log('result:', sum1, sum2);

if (sum1 > sum2) {
    console.log(gamer1, 'wins')
} else if (sum2 > sum1) {
    console.log(gamer2, 'wins')
} else {
    console.log('draw')
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //[min,max]
  }