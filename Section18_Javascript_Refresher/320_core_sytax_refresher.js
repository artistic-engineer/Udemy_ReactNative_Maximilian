// 320. Core Syntax Refresher
var namee = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName + 
        ', age is ' + 
        userAge + 
        ' adn the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(namee, age, hasHobbies));