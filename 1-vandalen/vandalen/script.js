"use strict";


var makePerson = function (persArr) {
    var result = {};
    //persArr.person = ["name", "age"];

    var names = [];
    var minAge = Infinity;
    var maxAge = 0;
    var totalAge = 0;

    persArr.forEach(function (person) {
        names.push(person.name);

        maxAge = Math.max(maxAge, person.age);

        minAge = Math.min(minAge, person.age);

        totalAge += person.age;

        //        minAge = //(person.age).sort(function (a, b) {
        //            return //a.localeCompare(b).shift();
        //        });

        //        maxAge = (person.age).sort(function (a, b) {
        //            return a.localeCompare(b)[Length-1]();
        //        });

        //        totalAge = (person.age).reduce(function (a, b) {
        //            return a + b;
        //        });
    });

//    function Person(name, age) {
//        this.getName = function () {
//        if (typeof (name) == string) {
//            return name;
//            }
//        };
//    
//        this.getAge = function () {
//        if (typeof(age) == number){
//            return age; 
//            }        
//        };
    //    }

    var averageAge = Math.round(totalAge / persArr.length);

    names.sort(function (a, b) {
        return a.localeCompare(b);
    });

    names = names.join(", ");





    return { minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names };
};
var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
