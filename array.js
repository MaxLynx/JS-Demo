let array = [];
for(let i = 0; i < 5; i++){
    array[i] = [];
    for(let j = 0; j < 5; j++){
        array[i][j] = parseInt(Math.random() * 5);
    }
}
console.log(array)
for(let i = 0; i < array.length; i++){
    array[i][i] = array[i].filter((element, index) => index != i).reduce((x, y) => x + y) 
        + array.reduce((sum, line) => {
        return sum 
        + line.filter((element, index) => index == i)[0]; 
        }, 0);
}
console.log(array);
