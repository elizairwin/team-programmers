//main program to be run in the console
//referred to class activity 16
//used the newly learned lineReader package

//requiring my team file so we can use it here
const Team = require("./team.js");
//file system
const fs = require("fs");

//reading the info from the members.txt doc
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

//creating a new team and giving it's project a name
const team = new Team("Project One");

//line reader will split the text
//log members
//add programmers (function from team.js)
lineReader
    .on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        console.log(member);
        team.addProgrammer(member[0], member[1], member[2], member[3]);
    })
    //once the reading is done, it will start the process function
    .on('close', process);

function process() {
    //consol logging the phrase we want to end with
    //pulling in the programmerCount function from team.js 
    console.log("There are " + team.programmerCount() + " programmers");
}







