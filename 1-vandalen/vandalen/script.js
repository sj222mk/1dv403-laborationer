"use strict";


var makePerson = function(persArr){
    function Person(name, age){
    this.name = name;
    this.age = Number(age);
    }
    
    Person.prototype.Result = function (minAge, maxAge, averageAge, names){
        
        minAge = Math.min(this.age);
        maxAge = Math.max(this.age);
        
        averageAge = (this.age).sum() / arguments.length;
        
        names = makePerson(name);
        names.sort();
        
        return "Object {minAge: " + minAge + ", maxAge: " + maxAge + ", averageAge: " + averageAge + ", names: " + names;
    };
    
    return result;
};
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
