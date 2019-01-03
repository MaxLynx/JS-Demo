let array = [];
for(let i = 0; i < 5; i++){
    array[i] = [];
}
let n = 1;
for(let limit = 0; limit < array.length/2; limit++){
    for(let i = limit; i < array.length - limit; i++){
        array[limit][i] = n++;
    }
    for(let i = limit; i < array.length - limit - 1; i++){
        if(array[i][array.length - 1 - limit] == undefined)
            array[i][array.length - 1 - limit] = n++;

    }
    for(let i = array.length - limit - 1; i > limit; i--){
        array[array.length - limit - 1][i] = n++;

    }
    for(let i = array.length - limit - 1; i > limit; i--){
        array[i][limit] = n++;

    }
}
console.log(array);
