// 321. let & const
const namee = 'Max';
let age = 29;
var hasHobbies = true;

age = 30;
//namee = 'Min'

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(namee, age, hasHobbies));