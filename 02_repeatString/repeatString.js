const repeatString = function(string, repeat) {
    let output = "";
    if(repeat < 0) {
        return "ERROR";
    }
    for(let i = 0; i < repeat; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
