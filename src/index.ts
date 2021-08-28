// Basic Types-------------------

const name: string = 'Amir Kakavand';
const age: number = 22;
const isMarried: boolean = false;
let someVariable: any;

// Arrays & Tuples-------------------

// Array of strings
let myFriends: string[] = ['Mark', 'Jennifer', 'Lucy', 'John'];

// Tuple
let personInfo: [string, number, boolean];
personInfo = ['Hillary', 42, true];

// Array of Tuples
let friendsInfo: [string, number, boolean][];
friendsInfo = [
    ['Mark', 24, false],
    ['Jennifer', 31, true],
    ['Lucy', 19, false],
    ['John', 24, true]
];

// Unions-------------------

let id: number | string = 1243268464;
id = '234123';

// Enum-------------------

enum week {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}

// console.log(week.monday); //output: 2

// Objects & their types-------------------

type Person = {
    age: number,
    isMarried: boolean,
    job: string
}

const Joe: Person = {
    age: 43,
    isMarried: true,
    job: "Police officer"
}

// Functions-------------------

function add(a: number, b: number): string {
    return ("The result is: " + (a + b))
}

// console.log(add(2, 3));
// output:
// The result is: 5

// Interfaces-------------------

interface userInterface {
    readonly userId: number,
    name: string,
    isMarried?: boolean,
}

let newUser: userInterface = {
    userId: 21341324,
    name: "Carl Johnson",
}


// Classes-------------------

class Book {
    name: string
    author: string
    releaseYear: number

    constructor(name: string, author: string, releaseYear: number) {
        this.name = name
        this.author = author
        this.releaseYear = releaseYear
    }
}

let deepWork = new Book("Deep Work", "Cal Newport", 2016);
// console.log(deepWork);
// output:
// Book { name: 'Deep Work', author: 'Cal Newport', releaseYear: 2016 }


export { };