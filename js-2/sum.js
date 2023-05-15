// escribe la función sum acá

function sum (array){

    let sumatoria = 0;
    
    for (let index = 0; index < array.length; index++) {
        sumatoria = sumatoria + array[index];
    }
        return sumatoria;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0