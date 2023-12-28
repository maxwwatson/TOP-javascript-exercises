const findTheOldest = function(array) {
// use reduct function. array of objects. find person with greatest age 
//xpect(findTheOldest(people).name).toBe('Ray');
    // take in array. use a function on it to return who is the older. 
    const d = new Date();
    let currentOldest = array.reduce(function(accumulator, currentValue) {
        // account for no death property
        console.log(`Accumulator ${accumulator.yearOfDeath} : currentValue: ${currentValue.yearOfDeath}`);
        if(!accumulator.hasOwnProperty("yearOfDeath")) {
            accumulator.yearOfDeath = d.getFullYear();
            //console.log(`year of death accumulator: ${accumulator.yearOfDeath}`);
        }
        if(!currentValue.hasOwnProperty("yearOfDeath")) {
            currentValue.yearOfDeath = d.getFullYear();
           // console.log(`year of death currentValue: ${currentValue.yearOfDeath}`);
        }
        // check if accumulator current object is greater age or not than currentValue object
        if((accumulator.yearOfDeath - accumulator.yearOfBirth) > (currentValue.yearOfDeath - currentValue.yearOfBirth)) {
            return accumulator;
        }
        else return currentValue;
    },{});

    return currentOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
