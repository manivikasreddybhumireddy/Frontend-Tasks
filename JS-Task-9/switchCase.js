let n1 = 30
let n2 = 78
let opr = "/"
switch(opr) {
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    case "/":
        console.log(n1/n2);
        break;
    case "%":
        console.log(n1%n2);
        break;
    default:
        console.log("Wrong operator");
}
