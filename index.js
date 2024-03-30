// Code your solution in this file!

//Instruction 1:

const scuberDrivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers= (scuberDrivers) => {
    
    return scuberDrivers.slice(0, 2);
}

returnFirstTwoDrivers(scuberDrivers);
console.log(returnFirstTwoDrivers(scuberDrivers));


//Instruction 2:

const returnLastTwoDrivers = (scuberDrivers) => {

    return scuberDrivers.slice(-2);
}

returnLastTwoDrivers(scuberDrivers);
console.log(returnLastTwoDrivers(scuberDrivers));


//Instruction 3:

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);


//Instruction 4

function createFareMultiplier (fareMultiplier) {
    return function (fare) {
        return fare*fareMultiplier;
    }
}

let fare = 10;


//Instruction 5

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(fare));


//Instruction 6

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(fare));


//Instruction 7:

function selectDifferentDrivers (scuberDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(scuberDrivers);
}

selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers);
console.log(selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers));