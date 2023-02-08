// console.log('funzia?')

/*****************
 PALINDROMO
******************/

// chiedere al'utente di inserire una parola
    // usare promt
const parolaUtente = prompt('Inserisci una parola palindroma');
console.log(parolaUtente)

// invocare la funzione
isPalindrome(parolaUtente)

// creare una funzione per capire se la parola è palindroma
    
    
        // usando una comparazione tra gli indici del primo array e del secondo con le lettere invertite
 
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
    let isWordPalindrome = true

    for (let i = 0; i < lowerCaseParola.length; i++) {
        if (parolaArray[i] !== parolaArreyReverse[i]) {
            isWordPalindrome = false
            console.log('non è palindroma')
        }
    }
    console.log(isWordPalindrome)
 }


// comunicare all'utente se la parola inserita è palindroma o no
    // console.log

/*****************
 PARI E DISPARI
******************/

// far scegliere all'utente pari o disapri
// far scegliere all'utente un numero tra 1 e 5

// generare un numero random da 1 a 5 usando una funzione

// sommiamo i due numeri

// stambilire se la somma dei due numeri è pari o disapri usando una funzione

// comunicare il risultato all'utente