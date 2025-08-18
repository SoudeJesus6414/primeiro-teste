/* 
const idades = [13, 18, 12, 15, 27, 39, 56, 63, 42, 19];
const maiorDe18 = idades.filter(myFunction);

function myFunction(value){
    return value >= 18;
}

console.log(maiorDe18)

let sum = idades.reduce(myFunction);
function myFunction(total, value){
    return total + value;
}
console.log(sum); */

const numeros = [5, 12, 8, 130, 44];
const maiorQue10 = numeros.filter(myFunction);

function myFunction(value){
    return value > 10
};
console.log(maiorQue10)

const sumNum = numeros.reduce((total, numeros) => total += numeros);
console.log(sumNum);

const sumNumR = numeros.reduceRight((total, numeros) => total += numeros)
console.log(sumNumR)