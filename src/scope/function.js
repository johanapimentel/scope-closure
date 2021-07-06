const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2; // reasigna la variable
    let y = 1;
    let y = 2; // en este caso no puede ser declarada nuevamente
    console.log(x,y);
}

anotherFunction();