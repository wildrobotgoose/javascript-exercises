const removeFromArray = function(array, ...values) {
    const valuesToRemove = new Set(values);

    return array.filter( (element) => {
        return !valuesToRemove.has(element);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
