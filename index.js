const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = " ";
let secondPassword = " ";

let firstPasswordEl = document.getElementById("firstPassword-el"); 
let secondPasswordEl = document.getElementById("secondPassword-el"); 


//stretch goals: copy to clipboard 
//stretch goals: don't include numbers or symbols 

function generatePasswords() {
    let message = " ";
    let temp = "";
    
    for (let i = 0; i < 15; i++ ) {
        temp = getRandomCharacter();
        message += temp;
    }
    return message;
}

function getRandomCharacter() {
    let randomNumber = Math.floor(Math.random()*characters.length);
    return characters[randomNumber]; 
}

function renderPasswords() {
    firstMessage = generatePasswords(); 
    secondMessage = generatePasswords();
   
    firstPasswordEl.textContent = firstMessage;
    secondPasswordEl.textContent = secondMessage; 
}