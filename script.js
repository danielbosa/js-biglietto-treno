// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let price = 0.21;
let discountUnder18 = 0.2;
let discountOver65 = 0.4;
let age = parseInt(prompt('Quanti anni hai?'));
let distance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
let appliedPrice;
let finalCost;

console.log(age);
console.log(distance);


if (age < 18){
    finalCost = (price * (1 - discountUnder18)) * distance
    } else if (age >= 65){
        finalCost = (price * (1 - discountOver65)) * distance
    } else {
        finalCost = price * distance
}

console.log(finalCost.toFixed(2));

document.getElementById('costo-biglietto').innerHTML = finalCost.toFixed(2);

// age < 18 === 1.68000001
// age > 65 === 1.26
// 18 =< age < 65 === 2.1