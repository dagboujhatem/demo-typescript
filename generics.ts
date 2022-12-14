/**
 *  Custom generic methods
 */

function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error

// 2eme exemple : interface Array 
const array : Array<number> = [1,20,5, 10];