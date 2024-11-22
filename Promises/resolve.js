//How to add or store data in the promise object using resolve()

var promiseObject = new Promise(function(resolve,reject){
   // resolve(100);
   //resolve("vinay");
   resolve({
    name:"vinay",
    gender:"male",
   });

});
console.log(promiseObject);