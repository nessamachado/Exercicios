//Fazer um algoritmo que imprima os numeros impares de 0 a 100 sem função e com função

function ImprimirImpares() {
    for(let i = 0; i <= 100; i++){
        if (i % 2 === 0){
            continue;
        }
        console.log(i)
    }
}
ImprimirImpares()