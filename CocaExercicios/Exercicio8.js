//Fazer um algoritmo que imprima os numeros primos de 0 a 100 sem função e com função

function pegaPrimos(){
    for (let a = 0; a <=100; a++){
        let divisores = 0;
        for (b = 1; b <= a; b++){
            if (a % b === 0){
            divisores++
            }
        }
        if(divisores == 2){
            console.log(a)
        };
    }
}
pegaPrimos()