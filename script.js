"use strict";


var makePerson = function (persArr) {
    var result = {};
    
    var names = [];
    var minAge;
    var maxAge;
    var totalAge;

    persArr.forEach(function (person) {
        names.push(person.name);

        minAge = age.sort(function (a, b) {
            return a.localeCompare(b).shift();
        });

        maxAge = age.sort(function (a, b) {
            return a.localeCompare(b).pop();
        });

        totalAge = age.reduce(function (a, b) {
            return a + b;
        });
    });

    /*function Person(name, age) {
        this.getName = function () {
            if (typeof (name) == string) {
                return name;
            }
        };
        this.getAge = function () {
            if (typeof(age) == number){
                return age; 
            }        
        };
    }*/

    var person = new Person(name, age);

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
