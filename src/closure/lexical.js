const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(3);

myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);

myOtherCount();
myOtherCount();
myOtherCount();


const person = () => {
    var saveName = "Name";
    return {
        getname: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setName("Johana");
console.log(newPerson.getname());

