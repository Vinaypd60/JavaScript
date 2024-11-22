//Accesspromise data

var promiseObject = new Promise(function(resolve,reject){
    // resolve(100);
    //resolve("vinay");
    resolve({
     name:"vinay",
     gender:"male",
    });
 
 });
 console.log(promiseObject);

 //How to access data and promise object

 promiseObject
 .then(function(successdata){
    console.log("then() executed");
    console.log(successdata);
 })
 
 .catch(function(errordata){
    console.log("catch() executed");
    console.log(errordata);
 });
  //then = success data catch = failure