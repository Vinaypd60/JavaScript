var obj ={
    id :101,
    name: "xyz",
    fn:function(x) {
        var a = 100;
        var b = 200;
        console.log(a+b); 
        console.log(x);
    },
};
obj.fn(999);