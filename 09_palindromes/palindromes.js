const palindromes = function (palindrome) {
    // charCodeAt()
    // char values - lowercase 97(a) - 122(z)
    let lower = palindrome.toLowerCase();
    let charArray = lower.split('');
    //let evenString = (charArray.length%2) == 0 ? true : false;
    // get rid of all whitespace and etc
    let newStr = charArray.reduce(function(array, currentChar) {
        if((currentChar.charCodeAt(0) < 97 || currentChar.charCodeAt(0) > 122)
           && (currentChar.charCodeAt(0) < 48 || currentChar.charCodeAt(0) > 57)) {
            return array;
        };
        return [...array, currentChar];
    }, []);
    console.log(newStr);
    for(let i = 0; i <= newStr.length/2; i++) {
        //console.log(`i value: ${newStr[i]} othervalue ${newStr[length]}`)
        if(newStr[i] != newStr[newStr.length-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
