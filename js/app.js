// console.log('funzia?')

/*****************
 PALINDROMO
******************/
/*
// chiedere al'utente di inserire una parola
    // usare promt
const parolaUtente = prompt('Inserisci una parola palindroma');
console.log(parolaUtente)

// invocare la funzione
// isPalindrome(parolaUtente)

// creare una funzione per capire se la parola è palindroma
function isPalindrome (parola) {

    // trasformare tutti i caretteri minuscoli
    const lowerCaseParola = parola.toLowerCase()
    console.log(lowerCaseParola)

    // trasformare la parola in un array
    const parolaArray = [...lowerCaseParola]
    console.log(parolaArray)

    // invertire gli indici dell'array
    const parolaArreyReverse = parolaArray.slice().reverse()
    console.log(parolaArreyReverse)

    // confrontare tutti gli indici
    // usando una comparazione tra gli indici del primo array e del secondo con le lettere invertite
    for (let i = 0; i < lowerCaseParola.length; i++) {
        if (parolaArray[i] === parolaArreyReverse[i]) {
            return true
        } else {
            return false
        }
    }
}

// comunicare all'utente se la parola inserita è palindroma o no
    // console.log

if (isPalindrome(parolaUtente)){
    console.log('yes')
} else {
    console.log('no')
}
*/

/*****************
 PARI E DISPARI
******************/

// far scegliere all'utente pari o disapri
let evenOrOdd

while (evenOrOdd !== 'pari' && evenOrOdd !== 'dispari') {
    evenOrOdd = prompt('Scegli se pari o dispari')
}

console.log(evenOrOdd)

// far scegliere all'utente un numero tra 1 e 5
let number

do {
    number = parseInt(prompt('scegli un numero da 1 a 5'))
} while (number < 1 || number > 5)

console.log(number)



// generare un numero random da 1 a 5 usando una funzione

let numberPc

randomNumber(numberPc)


function randomNumber (numeroRandom) {
    numeroRandom = Math.floor(Math.random() * 5) + 1
    console.log(numeroRandom)
}

// sommiamo i due numeri

// stambilire se la somma dei due numeri è pari o disapri usando una funzione

// comunicare il risultato all'utente