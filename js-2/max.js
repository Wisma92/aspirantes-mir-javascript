// escribe la función max acá

function max (array) {
    
    let maximo = 0;

    if (array.length === 0) {
        maximo = undefined;
    } else {
        for (let index = 0; index < array.length; index++) {
            if (array[index] > maximo) {
                maximo = array[index];
            }
    }
return maximo;
}
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined