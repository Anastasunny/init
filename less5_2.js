var now = new Date();
var daysOfYear = [];

for (var d = new Date('01/01/2000 00:00:00 PM UTC'); d <= now; d.setDate(d.getDate() + 1)) {
   
    if ((d.getDay() == 5) && (d.getDate() == 13)) {
        daysOfYear.push(new Date(d));
    }

}

console.log(daysOfYear);
console.log('количество пятниц 13:', daysOfYear.length);


