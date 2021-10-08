//1
// let arr = [1,2,3,4,5,6];

// const reversed = arr.reverse();
// console.log(arr);

//2
// let arr1 = [32, 2, 34, 65, 4];

// const max = Math.max.apply(null, arr1);

// console.log(max);


// 3

// var fib = [0, 1]; 
// let n = 20;
// let begin = 5;
// let end = 12;

// for (i = 0; i < n - 2; i++) { 
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]); 
// }

// var result = fib.slice(begin, end);

// console.log(result);

//4
// let a = [3, 4, 8, 7];
// let b = [3, 7, 9, 4];
// let count = 0;
// let znach = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i]===b[i]) { 
//     count++;
//     }
// }

// for (i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             if (a[i] !== b[i]) {
//             znach++;
//             }
//         }
//     }

// }

// console.log('совпадает и по значению, и по позиции:',count);
// console.log('совпадает по значению, но не по позиции:',znach);

//5
// let arr3 = [34, 5, 66, 54, 1, 3, 2, 4];

// arr3.sort(function(a, b) {
//     return a - b;
//   })
// console.log(arr3);

// arr3.sort(function(a, b) {
//     return b - a;
//   })

// console.log(arr3);


//6

// var arr6 = [1, 2, 1, 1, 10, 5, 3, 4, 40, 50, 50];
// i = arr6.length;
// arr7 = [];
// arr6.sort(function (a, b) {

//      return a - b;

// });

// for (var i = 0; i < arr6.length; i++) {
//     arr6[i] != arr6[i - 1] && arr6[i + 1] != arr6[i] && arr7.push(arr6[i])

// }

// console.log(arr7);

