// 323 Objects Properties & Methods

const person = {
    namee: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.namee);
    }
};

person.greet();