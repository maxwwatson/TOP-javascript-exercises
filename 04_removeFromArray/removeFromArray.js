const removeFromArray = function(array, ...args) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < args.length; j++) {
            if(array[i] === args[j]) {
                array.splice(i,1);
                i--;
                break;
            }
        }
    }
    /* Big learning points
    * to add multiple arguments into array:   ...args 
    */


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
