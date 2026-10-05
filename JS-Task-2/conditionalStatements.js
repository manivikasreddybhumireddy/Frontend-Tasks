function vowelOrNot(){
    let value = document.getElementById("char1").value
    if(value=='a' || value == 'e' || value == 'i' || value == 'o' || value == 'u' || value=='A' || value == 'E' || value == 'I' || value == 'O' || value == 'U') {
        document.getElementById("res1").value = "Vowel"
    }
    else {
        document.getElementById("res1").value = "Not an Vowel"
    }
}

function inRange() {
    let num = document.getElementById("num1").value
    if(num>=1 && num<=10){
        document.getElementById("res2").value = "Number is in 1 to 10 Range"
    }
    else {
        document.getElementById("res2").value = "Number is not in 1 to 10 Range"
    }
}


function uppercase() {
    let char = document.getElementById("char2").value
    if(char >= 'A' && char <='Z'){
        document.getElementById("res3").value = "Uppercase"
    }
    else{
        document.getElementById("res3").value = "Not Uppercase"
    }
}


function lowercase() {
    let char = document.getElementById("char3").value
    if(char >= 'a' && char <='z'){
        document.getElementById("res4").value = "Lowercase"
    }
    else{
        document.getElementById("res4").value = "Not Lowercase"
    }
}


function alphabet(){
    let value = document.getElementById("char4").value
    if((value >= 'a' && value <='z') || (value >= 'A' && value <='Z')){
        document.getElementById("res5").value = "Alphabet"
    }
    else{
        document.getElementById("res5").value = "Not Alphabet"
    }
}

function Digit(){
    let value = document.getElementById("num2").value
    if(value >= -9 && value <=9){
        document.getElementById("res6").value = "It is a Digit"    
    }
    else{
        document.getElementById("res6").value = "It is not a Digit"
    }
}


function Login(){
    let name = document.getElementById("val1").value
    let pass = document.getElementById("val2").value
    if(name == "Mani" && pass == "Mani@123"){
        document.getElementById("res7").value = "Login Successfull..✅"
    }
    else {
        document.getElementById("res7").value = "Invalid Credentials..❌"
    }
}
