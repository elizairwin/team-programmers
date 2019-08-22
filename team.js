//referred to class activity 10

//requiring my programmer file so we can use it here
const Programmer = require("./programmer.js");

//Class constructor for Team
class Team {
    //required info
    constructor(project) {
    this.name = project;
    this.programmers = [];
}

//add programmer function to be used in index.js
addProgrammer (name, position, age, language) {
    let newProgrammer = new Programmer(name, position, age, language);
    //print stats function from programmer.js
    newProgrammer.printStats();
    //pushing info to empty programmers array
    this.programmers.push(newProgrammer);
};

//programmer count function to be used in index.js
programmerCount() {
  return this.programmers.length;
};
}

//line of code learned in class for exporting
module.exports = Team;