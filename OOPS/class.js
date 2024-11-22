class product  {
    pId = 101;
    pName = "samsung gakaxy";
    price = 40000;
    display(){
        console.log(this.pId, this.pName, this.price);
    }
    changeprice(newPrice){
        this.price = newPrice;
        this.display();
    }

    changeName(newName){
        this.pName = newName;
        this.display()
    }
}

 var product1 = new product(); // product1 = {pId,pNmae,price,display}everything will be there
 product1.display();