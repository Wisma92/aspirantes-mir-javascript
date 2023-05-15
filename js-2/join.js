function join(array) {
    
    let resultado = " ";

    for (let index = 0; index < array.length; index++) {
            resultado = resultado + " " + array[index];
    }
return resultado;
}

console.log(join([1, 3, 2])) //  1 3 2
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 10 9 8 7 6 5 4