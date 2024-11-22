// Generator function
function* f1(){
    console.log("Hello,firstline");
    console.log("Hello,secondline");
    console.log("Hello,thirdline");
    console.log("Hello,fourthline");
yield 100
console.log("Hello",firstline);
    console.log("Hello,5 line");
    console.log("Hello,6 line");
    console.log("Hello,7 line");
yield 500
}
var generatorObject = f1();

 var obj = generatorObject.next();
 console.log(obj);

 var obj1 = generatorObject.next();
 console.log(obj1);

 var obj2 = generatorObject.next();
 console.log(obj2); //undefined value

