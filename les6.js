// let arr = [1,2,3,4,5,6];
// console.log(arr);
// let reversed = arr.reverse();
// console.log(reversed);


// function reverse(arr){
//     var arr2 = [];
//     for (var i = arr.length - 1; i> -1; i--){
//         arr2.push(arr[i]);
//     }
//     return arr2;
// }
// console.log(reverse([1,2,3,4,5,6]));


// let a = [1,2,3,4,5,6];
// let b = [];

// for (let j = a.length - 1; j >= 0; j--) {
//     b.push(a[j]);
// }
//     console.log(b);

// let arr = [3, 67, 15, 9];
// let max = 0;

// //for of
// for (let n of arr) {
//     if (n > max) max = n;
// }

// обычное for
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }  
// }
// console.log(max);

// var n = 12;
// var fibonacci = [0, 1];


// for (let i = 2; i < n; i ++) {
//     // Получаем i-й элемент последовательности как сумму предыдущих двух
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
//   }
  
//   console.log(fibonacci.slice(5,n));

let a = '3487';
let b = '3794';
let count = 0;
let znach = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i]===b[i]) { 
    count++;
    }
}

for (i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            if (a[i] !== b[i]) {
            znach++;
            }
        }
    }

}

console.log('совпадает и по значению, и по позиции:',count);
console.log('совпадает по значению, но не по позиции:',znach);
