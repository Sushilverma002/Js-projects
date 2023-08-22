const passwordBox = document.getElementById("password");
const length = 12;

//different char allowed in password

const upperCase = "ABCDEFGHIJKLMNOPQERSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqerstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbols;
//function for genrate password
function createPassword(){
    let password = "";
    // these lines says it genrate the random no/charcter/symbol etx using math . random funciton of length specified
    password +=upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbols[Math.floor(Math.random() * symbols.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    //Print in the input box so
    passwordBox.value = password;
}

//copy password

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

