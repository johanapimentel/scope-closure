const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();

var scope = "im global";

const funcionScope = () => {
    var scope = "im just a local";
    const func = () => {return scope}
    console.log(func());
};

funcionScope();