// escribe la función maxIndex acá

function maxIndex(array) {
    
    let maximo = 0;
    let indice = -1; 

    for (let index = 0; index < array.length; index++) {
            if (array[index] > maximo) {
                maximo = array[index];
                indice = index;

            }
    }
return indice;

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([5, 4, 8, 7, 6])) // 2
console.log(maxIndex([])) // -1