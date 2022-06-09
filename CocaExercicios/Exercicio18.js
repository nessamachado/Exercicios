//Fazer uma funcao que receba um array e retorne um novo array e para cada posicao desse array que tiver 
//um numero par retorne o numero com - par na frente e para cada posicao que tenha um impar retorne 
//o numero com - impar na frente e quando for zero retorne a string zero ao invés do numero 0.

const arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function numeros(num) {
    let novoArray = [];
    for (num of arraynumeros){
        if (num === 0) {
            console.log("0");
        } else if (num % 2 === 0) {
            console.log (`${num} - PAR`);
        } else if (num % 2 !== 0) {
            console.log (`${num} - IMPAR`);
        } 
        }
    }
numeros();


