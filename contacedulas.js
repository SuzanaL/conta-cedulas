let n = 11257;
let quantidadeNotas = 0;
let cedulas = [100, 50, 20, 10, 5, 2, 1];

//Função responsável por contas as notas a partir de um valor
function contaNotas(valor){
    quantidadeNotas = parseInt(n/valor);
    n -= quantidadeNotas*valor;
    console.log(`${quantidadeNotas} notas(s) de R$ ${valor},00`);
}

console.log(n);

for(let cedula in cedulas ){
    contaNotas(cedulas[cedula])
}