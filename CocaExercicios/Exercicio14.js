//Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter

const arraynumeros = [1, 2, 3, 4, 5, 16, 17, 18, 19, 10]

function numeros(num) {
let novoArray = [];
    for (num of arraynumeros) {
        if (num % 2 !== 0) {
            novoArray.push(num)
        }
    } 
    console.log(novoArray)
}
numeros() 
