"use strict";


var makePerson = function (persArr) {
    var result = {};
    persArr.person = ["name", "age"];

    var names = [];
    var minAge;
    var maxAge;
    var totalAge;

    persArr.forEach(function (person) {
        names.push(person.name);

        minAge = (person.age).sort(function (a, b) {
            return a.localeCompare(b).shift();
        });

        maxAge = (person.age).sort(function (a, b) {
            return a.localeCompare(b).pop();
        });

        totalAge = (person.age).reduce(function (a, b) {
            return a + b;
        });
    });

    var averageAge = totalAge / persArr.length;

    names.sort(function (a, b) {
        return a.localeCompare(b);
    });

    names = names.join(", ");





    return { minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names };
};
var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
