//Fazer um algoritmo que imprima os numeros pares de 0 a 100 sem função e com função

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}