var x = 100;
var y = 200;

var result1 = x + ++y; // 100 + 201 = 301 pre-inc
var result2 = x + y++; // 100 + 200 =300 post-inc


console.log(result1,result2);