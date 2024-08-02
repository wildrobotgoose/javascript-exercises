const getAge = function(person) {
    const currentYear = new Date().getFullYear();

    return (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
}

const findTheOldest = function(people) {

    return people.reduce( (a, b) => getAge(a) >= getAge(b) ? a : b );
};

// Do not edit below this line
module.exports = findTheOldest;
