console.log('hello world')


let listaDenumeros = [1 , 2, 3 , 4, 5, 6, 7, 8, 9, 10]

let positivos = [];
let negativos = [];
function numeros (){

    for (let i = 0; i < listaDenumeros.length; i++){
        if (listaDenumeros[i] % 2 === 0){
            positivos.push(listaDenumeros[i])
        }else{
           negativos.push(listaDenumeros[i])
        }
    } 

    console.log('os números pares sao:', positivos)
    console.log('os números impares sao:', negativos)
}
numeros (listaDenumeros)