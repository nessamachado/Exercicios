//Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando filter

const arrytodos = [87, 7, 46, 34, 29, 95, 56]

function numeros(num) {
    let arraypar = []
    for(num of arrytodos) {
        if (num % 2 === 0)
        arraypar.push(num)
    } 
    console.log(arraypar)
}
numeros()
