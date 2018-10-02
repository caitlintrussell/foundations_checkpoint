function thrice(argFunc) {
    let counter = 0;
    if (counter < 3) {
        counter = counter + 1;
        return argFunc;
    } else {
        return undefined;
    }
}