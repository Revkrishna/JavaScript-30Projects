const inputBox = document.getElementById("inputtext");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&";

const allChar = upperCase+ lowerCase+number+symbol;

function createPassword(){
    let passwords ="";
    passwords += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwords += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    passwords += number[Math.floor(Math.random()* number.length)];
    passwords += symbol[Math.floor(Math.random()* symbol.length)];

    while (length > passwords.length){
        passwords += allChar[Math.floor(Math.random()*allChar.length)];
    }
    inputBox.value =passwords;

};

function copyPassword(){
    inputBox.select();
    document.execCommand("copy");
}