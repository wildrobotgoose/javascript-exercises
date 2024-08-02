const palindromes = function (s) {
    const arr = Array.from(s.toLowerCase()).filter( (c) => {
        return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
    });

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
