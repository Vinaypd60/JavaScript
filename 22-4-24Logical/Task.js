var details = [
     {
       brand: "Apple",
       price:100000,
       mode:"iphone15"
     },
     {
        brand: "One plus",
        price:45000,
        mode:"Oneplus nord"
      },
      {
        brand: "samsung",
        price:90000,
        mode:"samsung ultra"
      },
      {
        brand: "Vivo",
        price:30000,
        mode:"Vivo 5"
      },
      {
        brand: "Nokia",
        price:30000,
        mode:"Nokia C2"
      },
      {
        brand: "Redmi",
        price:50000,
        mode:"folded"
      },
    ];

    var Filterdata = details.filter(function(element){
        return element.brand == "Apple" || element.brand == "samsung";
    });
    console.log(Filterdata);
