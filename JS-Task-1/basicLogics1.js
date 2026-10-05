function addNum() {
    // input
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    // process
    let sum = n1 + n2;
    // output
    document.getElementById("result1").value = sum;
}


function avgNum() {
    let n1 = parseInt(document.getElementById("number1").value);
    let n2 = parseInt(document.getElementById("number2").value);
    let n3 = parseInt(document.getElementById("number3").value);

    let sum = n1 + n2 + n3;
    let avg = sum/3;

    document.getElementById("result2").value = avg ;
}


function sumOfn() {
    let n = parseInt(document.getElementById("num4").value);
    let sum = n * (n + 1)/2;
    document.getElementById("result4").value = sum;
}


function avgOfn() {
    let n = parseInt(document.getElementById("num5").value);
    let sum = n * (n + 1)/2;
    let avg = sum/n;
    document.getElementById("result5").value = avg;
}


function missingAngle() {
    let angle1 = parseInt(document.getElementById("angle1").value);
    let angle2 = parseInt(document.getElementById("angle2").value);

    let missingAngle = 180 - (angle1+angle2);

    document.getElementById("result6").value = missingAngle;
}


function profitPercentage() {
    let sellingPrice = parseInt(document.getElementById("sp").value);
    let costPrice = parseInt(document.getElementById("cp").value);

    let profitPercentage = ((sellingPrice-costPrice)/costPrice)*100;

    document.getElementById("result7").value = profitPercentage;
}


function simpleInterest() {
    let principleAmount = parseInt(document.getElementById("pa").value);
    let timePeriod = parseInt(document.getElementById("time").value);
    let rateOfInterest = parseInt(document.getElementById("ri").value);
    
    let simpleInterest = (principleAmount * timePeriod * rateOfInterest) / 100;

    document.getElementById("result8").value = simpleInterest;
}


function grossSalary() {
    let bs = parseInt(document.getElementById("bs").value);
    let bp = parseInt(document.getElementById("bp").value);
    let ip = parseInt(document.getElementById("ip").value);

    let bonus = (bp/100)*bs;
    let incentive = (ip/100)*bs;

    document.getElementById("gs").value = bs + bonus + incentive;
}


function inhandSalary() {
    let bs = parseInt(document.getElementById("bs").value);
    let bp = parseInt(document.getElementById("bp").value);
    let ip = parseInt(document.getElementById("ip").value);
    let pfPerc = parseInt(document.getElementById("pfPerc").value);
    let hiPerc = parseInt(document.getElementById("hiPerc").value);
    

    let bonus = (bp/100)*bs;
    let incentive = (ip/100)*bs;

    let pf = (pfPerc/100)*bs;
    let hi = (hiPerc/100)*bs;

    let earnings = bs + bonus + incentive;
    let deduction = pf+hi

    let inhandSalary = earnings - deduction;

    document.getElementById("ihSalary").value = inhandSalary
}


function lastDigit12() {
    let number1 = parseInt(document.getElementById("num1").value);

    let lastDigit11 = number1%10;

    document.getElementById("lastDigit").value = lastDigit11;

}


// Swaping two Numbers
let a = 10;
let b = 20;
let temp = a;

a = b;
b = temp;

console.log("a = ",a, " b = ",b);
console.log("----------------");


// Concatenation of Strings
let firstName = "Chinna";
let lastName = "Mani";

let fullName = firstName + lastName;

console.log(fullName);
console.log("----------------");


// implicit type conversion
let one = "10";
let two = 20;

let res = one + two;

console.log(res);
console.log(typeof res);

console.log("----------------");


let three = "10";
let four = 20;

let res1 = three - four;

console.log(res1);
console.log(typeof res1);

console.log("----------------");


let five = 60;
let six = true;

let res2 = five + six;

console.log(res2);
console.log(typeof res2);

console.log("----------------");


// explicit type conversion
let seven = 20;
let eight = String(seven);

console.log(typeof eight);
console.log("----------------");