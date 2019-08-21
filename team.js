//refer to classroom.js activity
//requiring 
const Programmer = require("./programmer.js");

class Team {
    constructor(project) {
    this.name = project;
    this.programmers = [];

}

addProgrammer (name, position, age, language) {
    let newProgrammer = new Programmer(name, position, age, language);
    newProgrammer.printStats();
    this.programmers.push(newProgrammer);
};

programmerCount() {
  return this.programmers.length;
};
}

module.exports = Team;