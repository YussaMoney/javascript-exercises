const palindromes = function (string) {
    stringToLowerCase = string.toLowerCase().replace(/[^a-z]/g, "");
    const reverseString = stringToLowerCase.split('').reverse().join('');
    if (reverseString == stringToLowerCase) {return true}
    else {return false}
};

// Do not edit below this line
module.exports = palindromes;
