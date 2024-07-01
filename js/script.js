//Realizzare una variabile alla quale assegno un promtp per chiedere i km da percorrere
let km = prompt('Inserisci i km da precorrere')

//Realizzare una variabile alla quale assegno un promtp per chiedere l'eta del passeggero
let eta = prompt('Inserisci la tua eta')

//realizzio una variabile per contenere il prezzo base
let prezzo_base = km * 0.21;

//Dichiaro una variabile per il prezzo finale
let prezzo_finale;

//se l'eta e inferiore a 18 => applico uno sconto del 20%
if (eta < 18) {
    //Calcolo dal prezzo base lo sconto
    let sconto = prezzo_base * 0.2;
    //calcolo il prezzo finale
    prezzo_finale = prezzo_base - sconto;
}

console.log(prezzo_finale)