"use strict";
// Basic Types-------------------
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'Amir Kakavand';
const age = 22;
const isMarried = false;
let someVariable;
// Arrays & Tuples-------------------
// Array of strings
let myFriends = ['Mark', 'Jennifer', 'Lucy', 'John'];
// Tuple
let personInfo;
personInfo = ['Hillary', 42, true];
// Array of Tuples
let friendsInfo;
friendsInfo = [
    ['Mark', 24, false],
    ['Jennifer', 31, true],
    ['Lucy', 19, false],
    ['John', 24, true]
];
// Unions-------------------
let id = 1243268464;
id = '234123';
// Enum-------------------
var week;
(function (week) {
    week[week["sunday"] = 1] = "sunday";
    week[week["monday"] = 2] = "monday";
    week[week["tuesday"] = 3] = "tuesday";
    week[week["wednesday"] = 4] = "wednesday";
    week[week["thursday"] = 5] = "thursday";
    week[week["friday"] = 6] = "friday";
    week[week["saturday"] = 7] = "saturday";
})(week || (week = {}));
const Joe = {
    age: 43,
    isMarried: true,
    job: "Police officer"
};
// Functions-------------------
function add(a, b) {
    return ("The result is: " + (a + b));
}
let newUser = {
    userId: 21341324,
    name: "Carl Johnson",
};
// Classes-------------------
class Book {
    constructor(name, author, releaseYear) {
        this.name = name;
        this.author = author;
        this.releaseYear = releaseYear;
    }
}
let deepWork = new Book("Deep Work", "Cal Newport", 2016);
