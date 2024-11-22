var obj1 = {
    username:"Vinay sai",
    gender:MathMLElement,
    city:"Hydearbad",
};
  
      //obj1.username
     //obj1['username']
     for (let key in obj1){
       // console.log(key);
       // console.log(obj1.key); // it is not valid
       console.log(key, ":", obj1[key]);
     }