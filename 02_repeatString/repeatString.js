const repeatString = function(string, number) {
    let sumOfString = '';

    for (i = 1; i <= number; i++) {
        sumOfString += string;
    }

    return sumOfString;
};

// Do not edit below this line
module.exports = repeatString;
