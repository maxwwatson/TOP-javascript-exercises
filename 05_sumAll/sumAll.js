const sumAll = function(start, end) {
    let startNum;
    let endNum;
    let sum = 0;

    if(typeof(start) !== 'number' ||
       typeof(end) !== 'number') {
        return "ERROR";
    }
    else if(start < 0 ||
            end < 0) {
        return "ERROR";
    }

    // start with smallest number
    if(start > end) {
        startNum = end;
        endNum = start;
    }
    else {
        startNum = start;
        endNum = end;
    }
    // sum up
    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    console.log(sum);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
