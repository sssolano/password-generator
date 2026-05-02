const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"
];

let firstEl = document.getElementById("firstOption-el")
let secondEl = document.getElementById("secondOption-el")

let passwordCharacter = ""

function randomPassword() {
    let finalPassword1 = generateRandomPassword()
    firstEl.value = finalPassword1

    let finalPassword2 = generateRandomPassword()
    secondEl.value = finalPassword2
}

function generateRandomPassword() {
    let passwordOption = []
    for (let i = 0; i < 15; i++) {
        passwordCharacter = Math.floor(Math.random() * characters.length)
        passwordOption += characters[passwordCharacter]
    }
    return passwordOption
}