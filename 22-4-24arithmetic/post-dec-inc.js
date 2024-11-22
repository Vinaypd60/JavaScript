var  x = 100;
var y = 50;

var result1 = --x + --y; //pre-dec 99 + 49 = 148
console.log(result1); // x=99, y=49

var result = x-- + y--; //post-dec  99 + 49 = 148
console.log(result); // x = 98,y = 48

console.log(x,y); //x =98, y =48

