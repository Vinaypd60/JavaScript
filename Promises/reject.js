//How to add or store data in the promise object using reject()

var promiseObject = new Promise(function(resolve,reject){
    //reject(100);
    // reject("Vinay");
    reject('something went wrong');
 
 });
 console.log(promiseObject);