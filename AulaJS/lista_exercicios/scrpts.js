console.log("------------Lista de exercicios SIgaa------------")

console.log("-----ex01-----")

let numerosInteiros = [1,2,3,4,5]

function somaDosElementos(numeros){
    let soma = 0 

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    console.log(`soma = ${soma}`)
}

somaDosElementos(numerosInteiros)


console.log("-----ex02-----")

function mediaElementos(numeros){
    let soma = 0;
    let media = 0;

    for (let i = 0; i< numeros.length; i++){
        soma += numeros[i];
        media = soma / numeros.length;

    }
    console.log(`media = ${media}`)
}


mediaElementos(numerosInteiros)

console.log("-----ex03-----")

function menorElemento(numeros){

    
}