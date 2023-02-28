const repeatString = function(string, number) {
    let sumOfString = '';

    if (number > 0) {
        for (i = 1; i <= number; i++) {
            sumOfString += string;
        }
    
        return sumOfString;
    } else if (number === 0) {
        return sumOfString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
