/*var hello = "Hello";
var hello = "Hello + "; // imprime por consola esta variable y no la anerrior
let world = "hello world";
// let world = "world hello"; di dejamos las dos saca un error
const helloworld = "Hello world";
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);

};
anotherFunction();*/

const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'im global';
}

console.log(globalVar);
