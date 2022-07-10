const repeatString = function(st, times) {
    if (times < 0) {return 'ERROR'};
    
    let repeat = '';
    for (let index = 0; index < times; index++) {
         repeat += st;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
