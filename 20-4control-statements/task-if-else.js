var productData = {
    pNmae: "Iphone 15",
    price: 150000,
    inStock:false,
};

//WAF to print the given product is available or it is out of stock
function productAvailbility(){
    if(productData.inStock){
        console.log("Available")
    }
    else{
        console.log("Out of stock")
    }
    }
