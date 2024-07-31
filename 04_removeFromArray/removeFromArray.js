const removeFromArray = function(array, ...values) {
    const toRemove = new Array(array.length);
    for (let i = 0; i < toRemove.length; i++) {
        toRemove[i] = false;
    }

    for (const value of values) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                toRemove[i] = true;
            }
        }
    }

    const arrayWithElementsRemoved = [];
    for (let i = 0; i < array.length; i++) {
        if (!toRemove[i]) {
            arrayWithElementsRemoved.push(array[i]);
        }
    }

    return arrayWithElementsRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
