// password generator

const perkataan = 'abcdefghijklmnopqrstuvwxyz'
const nombor = '0123456789'
const simbol = '~!@#$%^&*()_+'

// 1)
// tuliskan function yang menghasilkan random password yang ada perkataan, nombor, simbol
// panjang password 10 aksara

// 2)
// kemaskini function password generator supaya menerima
// panjang
// include nombor?
// include simbol?



// 1)
// pseudocode
const combinedChar = perkataan + nombor + simbol
console.log(combinedChar)
console.log('total char', combinedChar.length)


// randomly generate a number between 0 and 49

// console.log(Math.floor(Math.random() * 50))
// const randomIndex = Math.floor(Math.random() * 50)
// console.log('randomly selected char' , combinedChar[randomIndex])    // 1 kali

// function to select 10 characters randomly     // 10 kali
function randomChar(combinedChar) {
    const randomIndex = Math.floor(Math.random() * combinedChar.length)
    debugger
    return combinedChar[randomIndex]
}

// password 10 aksara
// let password = ''
// for (let index = 0; index < 10; index++) {
//     password += randomChar(combinedChar) 
// }

// console.log(password)


// 2) kemaskini code
function passwordGenerator(length, includeNumber = true, includeSymbol = true) {
    let combinedChar = perkataan
    if (includeNumber) {
        combinedChar += nombor
    }

    if (includeSymbol) {
        combinedChar += simbol
    }

    let password = ''
    for (let index = 0; index < length; index++) {
        password += randomChar(combinedChar)
    }

    return password
}

console.log(passwordGenerator(12, true, true))           // (length, includeNumber, includeSymbol) *boleh adjust true / false untuk include atau tak