function rightTriangle(num) {
    let resultStr = '';
    if (num > 1) {
        for (let i = num; i >= 1; i--) {
            let starStr = '';
            for (let j = 0; j < i; j++) {
                starStr = starStr.concat('*');
            }
            resultStr = resultStr.concat('\n', starStr);
        }
        resultStr = resultStr.substring(1,resultStr.length);
        return resultStr;
    } else {
        return '';
    }
}
console.log(rightTriangle(3));