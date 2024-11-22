var obj = {
    name:"Vinay",
    id:101,

};
console.log(obj);

//new property
obj.gender = "male";
obj.email = "Vinay2gmail.com";
obj.address = {
    city:"Hyd",
};
obj.address.pincode = 502032;
obj["address"]["country"] = "India";
console.log(obj);
console.log(obj["address"]["country"]);