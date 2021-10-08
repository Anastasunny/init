//4.42
// let a = 2;
// let b = 20;

// if ((a % b === 0) || (b % a === 0)) {
// console.log('Да, одно из чисел является делителем другого')
// } else {
//     console.log('нет, ни одно из чисел не является делителем другого')
// }


// 4.43
// let a = 4;
// let b = 4;
// let c = 1;
// let d = 5;

// if ((a / b === c) || (a / b === d)){
//     console.log('верно');
// } else {
//     console.log('нет')
// }


//4.63



//4.69
// let a = 5;
// let b = 121;

// if (Math.sqrt(b) < a) {
//     b = b*5;
//     console.log(b);
// } else {
//     console.log('квадратный корень второго числа не меньше первого числа')
// }

// 4.68

// let a = -48;
// let b = -1;

// if (Math.abs(a) > Math.abs(b)) {
//     a = a / 2;
//     console.log(a);
// } else console.log('первое число меньше второго по абсолютной величине')

// 4.70

// let arr = [23, 44, 80];
// let a = [];

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         a.push(arr[i]);
//     }
// }
// console.log(a);

// 4.74
// let arr = [23, 44, 80, 45];
// let count = 0;

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log(count);

//4.99
// let m = 4;

// switch(m) {
//     case 1:
//         console.log('Пики');
//         break;
//     case 2:
//         console.log('Трефы');
//         break;
//     case 3:
//         console.log('Бубны');
//         break;
//     case 4:
//         console.log('Червы');
//         break;
//     default:
//         console.log('нет соответствий');
// }

// let card = {
//     1: 'пики',
//     2: 'трефы',
//     3: 'Бубны',
//     4: 'Червы',
// }
// console.log(card[2]);

// let card = {
//     туз: 14,
//     король: 13,
//     дама: 12,
//     валет: 11,
//     десятка: 10,
//     девятка: 9,
//     восьмерка: 8,
//     семерка: 7,
//     шестерка: 6,
// } 
// console.log(card.дама);


// let card = {
//     1: 'пик',
//     2: 'треф',
//     3: 'бубен',
//     4: 'черви',
//     14:'туз',
//     13: 'король',
//     12: 'дама',
//     11: 'валет',
//     10: 'десятка',
//     9: 'девятка',
//     8: 'восьмерка',
//     7: 'семерка',
//     6: 'шестерка',
// } 
// console.log(card[13] + ' ' + card[1]);

//5.13

// HT sorting

// let arr = [3, 4, 23, 2];
// console.log(arr);
// let i = 0;
// let t = 0;

// while (arr[i] < arr[i+1]) {
//     if (arr[i] < arr[i+1]) {
//         t = arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i] = t;
//         i++;
//     } else {
//         i++;
//     }
// }


// for (i = 0; i < arr.length; i++){
//     if (arr[i]>arr[i+1]){
//     arr2.push(arr[i]);
//     }
// } 
// console.log(arr);


// function bubbleSortConcept1(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//       for (let i = 0; i < j; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//         }
//       }
//     }
//   }