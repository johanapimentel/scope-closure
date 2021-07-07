a = 2;
var a;

console.log(a);

// se muestra por consola 2 ya que eleva las declaraciones

console.log(a);
var a = 1;

// 

nameOfDog('Elmo');

function nameOfDog(name) {
    console.log(name);
}

// closure

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`saveCoins: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(50);
myMoneyBox(20);
myMoneyBox(30);

