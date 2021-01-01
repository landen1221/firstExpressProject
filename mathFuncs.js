function convertToInt(arr) {
    let intArr = []
    for (let i=0; i<arr.length; i++) {
        intArr.push(parseInt(arr[i]))
    }
    return intArr
}

function mean(arr) {
    let intArr = convertToInt(arr)

    let total = 0;
    for (let i=0; i< intArr.length; i++) {
        total += intArr[i]
    }

    return total / intArr.length
}

function median(arr) {
    let intArr = convertToInt(arr)
    let sortedArr = intArr.sort();
    let length = sortedArr.length;

    if (length % 2 == 1) {
        return sortedArr[(length-1)/2]
    } else {
        return (sortedArr[length/2] + sortedArr[length/2-1]) / 2
    }
}

function mode(arr) {
    let intArr = convertToInt(arr)
    let modeDict = {};
    for (let i =0; i< intArr.length; i++) {
        if (modeDict[intArr[i]]) {
            modeDict[intArr[i]] ++
        } else {
            modeDict[intArr[i]] = 1
        }
    }
    
    let modeNum = getLargest(modeDict)

    
    return modeNum
}

function getLargest(dict) {
    let maxCount = 0
    let maxNumber = []
    
    for (let num in dict) {
        if (dict[num] > maxCount) {
            maxCount = dict[num]
            maxNumber = [parseInt(num)]
        } else if (dict[num] == maxCount) {
            maxNumber.push(parseInt(num))    
        }
    }

    return maxNumber

}

module.exports = {
    mean: mean,
    median: median,
    mode: mode
}