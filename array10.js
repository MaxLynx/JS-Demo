let array = [];
for(let i = 0; i < 5; i++){
    array[i] = [];
    for(let j = 0; j < 5; j++){
        array[i][j] = parseInt(Math.random() * 5);
    }
}
console.log(array)
let temp = 0;
for(let i = 0; i < array.length; i++){
    temp = array[i][i];
    array[i][i] = array[i][array.length - 1 - i];
    array[i][array.length - 1 - i] = temp;
}
console.log(array);
