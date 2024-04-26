console.log("-----------------Exercicio 01------------------")

let nomes = ["Enzo", "Henrique", "Eduardo", "Dudu", "Davi"];
let notas = [8.2, 1.0, 7.4, 6.2, 3.2];

function maiorNota(nomes, notas){
    
    let notao = 0;
    let melhorAluno = "nenhum";

    for (let i = 0; i < notas.length; i++){
        if (notao < notas[i]){
            notao = notas[i];
            melhorAluno = nomes[i];
        }
    }

    console.log(`A maior nota foi ${notao} e pertence ao aluno ${melhorAluno}`)
}

maiorNota(nomes, notas);

console.log("-----------------Exercicio 02------------------")


let inteiros = [ 1,2,3,4,5,6,7,8,9,10];

function inverteArray(inteiros){
    
    let invertido = [];

    for (numero of inteiros){
        invertido.unshift(numero) 
    }

    console.log(`Lista inteiros ${invertido}`)
}

inverteArray(inteiros)

console.log("-----------------Exercicio 03------------------")


let comeco = [1,2,3,4]

let fim = [5,6,7,8]

let juntos = comeco.concat(fim)

console.log(juntos)



