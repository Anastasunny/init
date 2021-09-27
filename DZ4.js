console.log(5 + true); //number+boolean 
console.log(true + ' hello'); //boolean + string 
console.log(12 + ' hello'); //number + string 
console.log(5 * true); // number*boolean 
console.log(5 * '12'); //number*string 
console.log(true * '12'); // boolean*string 
console.log('22' / true); //string/boolean 
console.log('123' / 123); //string/number 
console.log(12 / true); //number/boolean

{
   let str = "123";
console.log(typeof str); 
let num = Number(str); // явное преобразование из string в number
console.log(typeof num);
}

{
    let b = true;
console.log(typeof b);
let num = Number(b); // явное преобразование из boolean в number
console.log(typeof num);
}

{
    let b = 12;
console.log(typeof b);
let c = Boolean(b); // явное преобразование из number в boolean
console.log(typeof c);
}

console.log(parseInt("F", 16));
console.log(parseInt("1111", 2));
console.log(parseFloat('3.14'));