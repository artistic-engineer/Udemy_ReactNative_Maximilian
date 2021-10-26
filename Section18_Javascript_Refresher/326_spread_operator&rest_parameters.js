// 326. Spread Operator & Rest Parameters

//Spread
const person = {
    namee: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.namee);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ['Sports', 'Cooking'];

const copiedArray = [...hobbies];
console.log(copiedArray);

//Rest
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4,5,6,7,8,9,10));

