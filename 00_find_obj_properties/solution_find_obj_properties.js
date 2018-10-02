function findObjPropsHasOwn(obj) {
    let resultArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key) === true) {
            resultArr.push(key)
            console.log(key);
        };
    }
    return resultArr.join(', ');
}

function findObjKeys(obj2) {
    let resultArr = Object.keys(obj2);
    console.log(resultArr);
    return resultArr.join(', ');
}
