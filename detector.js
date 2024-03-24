/*Write a program that takes as input the speed of a car e.g 80. 
If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), 
it should give the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. 
If the driver gets more than 12 points, the function should print: “License suspended”. */

// declare a function
function checkSpeed (speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritThreshold = 12;

    // use if, else and else if as control structures
    if (speed <= speedLimit) {
        return "OK";
    } 
    const excessSpeed = speed - speedLimit
    const demeritPoints = Math.floor(excessSpeed/ kmPerDemeritPoint);
     // Math.flow - JS function that deals with mathematics functions
    
        if (demeritPoints > demeritThreshold) {
            return "License suspended";
        } else {
            console.log(demeritPoints);
            return "Points:" + demeritPoints;
        }
    }


// test the function with different speeds
console.log(checkSpeed(10));
console.log(checkSpeed(80)); 
console.log(checkSpeed(90)); 
console.log(checkSpeed(300)); 