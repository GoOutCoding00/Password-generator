const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btnEl = document.getElementById("btn-el")
let passwordOneEl = document.getElementById("pass-one-el")
let passwordTwoEl = document.getElementById("pass-two-el")
let lengthEl = document.getElementById("length-el")
let inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", function () {
    let passwordOne = ""
    let passwordTwo = ""
    
    for(let i = 0; i < inputEl.value; i++) {
        passwordOne += characters[RandomNum()]
        passwordTwo += characters[RandomNum()]
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo

})

function RandomNum() {
    return Math.floor(Math.random() * characters.length)
}

lengthEl.textContent = "Lenght: " + inputEl.value
inputEl.addEventListener('input', (event) => {
    lengthEl.textContent = "Lenght: " + event.target.value
})

