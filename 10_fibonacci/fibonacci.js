const fibonacci = function(nums) {
    // create fibonacci sequence based on input nums, store in array
    if(nums < 0) return "OOPS";
    if(nums == 0) return 0;
    if(nums == 1) return 1;
    if(nums == 2) return 1;
    let returnArray = [1,1];
    for(let i = 2; i < nums; i++) {
        returnArray.push(returnArray[i-1] + returnArray[i-2]);
    }
    
    console.log(returnArray);
    return returnArray[nums-1];
};

// Do not edit below this line
module.exports = fibonacci;
