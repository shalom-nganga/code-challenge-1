//Importthe required 'prompt-sync' module to get the user input
let prompt = require('prompt-sync')();
//Convert the fed speed
let input= prompt('feed speed')
//Convert the fed speed to a floating parse
let fedspeed = parseFloat(input)
//Describe the speed limit
const limit = 70
//Describe a function to check the speed and calculate points 
function checkspeed(speed) {
if (speed <70) {
    //if speed is not more than the limit,return "positive"
    return "ok";
} else {
    //calculate points for use when limit is exeeded
    let points = Math.floor((speed - 70) /5);
    if (points > 12) {
        return "license suspended";
    } else {
        //if points are within the required parameters,return the no of points 
        return `points: ${points}`;
    }
}

}

//call the check speed function with the fed speed and print the outcome
console.log(checkspeed(input))