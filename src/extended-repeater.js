module.exports = function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options
    separator = separator === undefined ? '+' : separator
    repeatTimes = repeatTimes === undefined ? 1 : repeatTimes
    additionRepeatTimes = additionRepeatTimes === undefined ? 1 : additionRepeatTimes;
    let arr = []
    for(let i =0; i < repeatTimes; i++){
        arr.push(`${str}`)
        for(let j = 0; j < additionRepeatTimes; j++) {
            if (addition !== undefined) arr.push(`${addition}`);
            if(additionRepeatTimes !== undefined && additionRepeatTimes > j+1) {
              arr.push(`${additionSeparator}`);
            }
          }
        if(repeatTimes > i+1) arr.push(`${separator}`);      
    }
    return arr.join('')
};