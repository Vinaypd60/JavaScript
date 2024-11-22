function calculator(operator,operator1,operator2){
    var result ;
switch(operator){

    case "*":
        result = operator1 * operator2;
        break;
    case "+":
        result = operator1 + operator2;
        break;
    case "/":
        result = operator1 / operator2;
        break;
        default:
        console.log("Invalid operator");
}
    console.log(result);

calculator("*",20,30); //+ - */
calculator("+",20,30);
calculator("/",20,30);
}