var user ={
    name:"vinay",
    id:101,
    gender:"male",
    city:"hyd",
};

function printDetails(){
    let {name,city} = user //destrcture
    console.log(name);
    console.log(city);
    console.log(name, "is from", city);
}
// printDetails();

function printCity({city,gender}){
 console.log(city,gender);
}
printCity(user);