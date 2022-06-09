//Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando filter

const arrayfilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let pares = arrayfilter.filter (function(num) {
    return num % 2 === 0
})
console.log(pares)