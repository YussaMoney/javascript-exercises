const reverseString = function (str) {
  
    let split = str.split('')
    reverse = split.reverse();
    join = reverse.join('');
    return join;
};

// Do not edit below this line
module.exports = reverseString;
