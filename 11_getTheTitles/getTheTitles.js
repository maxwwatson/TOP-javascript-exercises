const getTheTitles = function(theBooks) {
    let outputArray = theBooks.map(function(array) {
        return array.title;
    });
    console.log(outputArray);
    return outputArray;
};

// Do not edit below this line
module.exports = getTheTitles;
