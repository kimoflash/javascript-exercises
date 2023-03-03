const reverseString = function(words) {
    const wordsSplit = words.split('');
    const reverseWords = wordsSplit.reverse();
    const array = reverseWords.join("");
    return array;
};

// Do not edit below this line
module.exports = reverseString;
