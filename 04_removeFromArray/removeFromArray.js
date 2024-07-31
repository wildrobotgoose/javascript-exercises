const removeFromArray = function(array, ...values) {
    const valuesToRemove = new Set(values);
    const arrayWithElementsRemoved = [];
    array.forEach( (element) => {
        if (!valuesToRemove.has(element)) {
            arrayWithElementsRemoved.push(element);
        }
    });

    return arrayWithElementsRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
