// 327. Destructuring

const person = {
    namee: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.namee);
    }
};

const printName = ({ namee }) => {
    console.log(namee);
}

printName(person);

const { namee, age } = person;
console.log(namee, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
