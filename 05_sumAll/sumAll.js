const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    return (start + end) * (Math.abs(start - end) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
