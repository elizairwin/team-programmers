//main program
//activity 16 to read the other file
//lineReader package
const Team = require("./team.js");
const fs = require("fs");

const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

const team = new Team("Project One");

lineReader
    .on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        console.log(member);
        team.addProgrammer(member[0], member[1], member[2], member[3]);
    })
    .on('close', process);

function process() {
    // for (let i = 0; i < team.programmers.length; i++) {
    //   team.programmers[i].printStats();
    // }
    console.log("There are " + team.programmerCount() + " programmers");
}







