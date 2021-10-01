//integers

var input = 16;
var number = 16;
var output = [];
var parts = 4;
var result = 0;

for(let i = 0; i < (parts-1); i++){
 
 var part = Math.floor(Math.random() * (number - 1)) + 1;
  output[i] = part;
  number -= part;
}

for(let i = 0; i < (parts-1); i++){
    result += output[i]
}

output.push(input - result);
console.log(output);



//floats 

let input = 16.00;
let number = 16.00;
let output = [];
let parts = 4;
let result = 0.00;

for(let i = 0; i < (parts-1); i++){
    var part = parseFloat((Math.random() * (number - 1)) + 1).toFixed(2);
    output[i] = part;
    number -= part;
    console.log(output[i]);
}

for(let i = 0; i < (parts-1); i++){
    result += parseFloat(output[i]);
    console.log(result);
}


output.push((input - result).toFixed(2));
console.log(output);
