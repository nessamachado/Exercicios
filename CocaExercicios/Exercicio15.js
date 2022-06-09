//Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter

const arraynum = [41, 42, 54, 55, 67, 68, 77, 89, 92]
const impares = arraynum.filter (function(num){
    return num % 2 !== 0
})
console.log(impares)
