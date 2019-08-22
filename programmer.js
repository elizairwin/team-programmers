//referred to class activity 10

//Class constructor for Programmer
class Programmer {
    //required info
    constructor(name, position, age, language) {
    this.name = name;
    this.position = position; 
    this.age = age;
    this.language = language; 
}

    //print stats function to be used in team.js
    printStats() {
        console.log(`
            Name: ${this.name}
            Position: ${this.position}
            Age: ${this.age}
            Language: ${this.language}
            ----------
            `);
        };
}

//line of code learned in class for exporting
module.exports = Programmer;