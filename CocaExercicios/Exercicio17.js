//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter e usando o filter

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const arrPrimos = PrintPrimosArray (arr1);

console.log(arrPrimos)

function PrintPrimosArray(arr1) {
    const arr2 = arr1.filter((a) => {
        if(ehPrimo(a)) return a
    })
    return arr2
}

function ehPrimo(num) {
    if(num === 0 || num ===1) {
        return false
    } else {
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor ===0) return false
        } 
        return true
    }
}