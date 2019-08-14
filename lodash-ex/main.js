"use strict";
var _ = require('lodash');
var students = [{Name: "Dhananjay", Age: 38, Gender: "Male"},{Name: "Manav", Age: 7, Gender: "Male"},{Name: "Manoj", Age: 30, Gender: "Female"}]
// _.forEach(students, o=> o.Age += 10);
// _.forEach(students, o=> console.log(o.Age));

// var maleStudents = _.filter(students, o=> o.Gender == "Male");
// _.forEach(maleStudents, o=> console.log(o.Name));

// var result = _.dropWhile(students, o=> o.Gender=="Male");
// _.forEach(result, o=> console.log(o.Name));

var result = _.at(students, Name);
console.log(result);