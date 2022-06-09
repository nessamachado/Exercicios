//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter e usando o filter

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function teste (arr1){
for (let i = 0; i < arr1.length; i++) {
    let divisores = 0
    for (divisor = 1; divisor <= arr1[i]; divisor++) {
        if (arr1[i] % divisor === 0) {
            divisores ++
        }
    }
    if(divisores==2){
        console.log(arr1[i])

    }
}}
teste(arr1);