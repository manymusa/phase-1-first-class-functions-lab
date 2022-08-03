// Code your solution in this file!
const returnFirstTwoDrivers = (arr) =>  [arr[0],arr[1]];

const returnLastTwoDrivers = (arr) => [arr[arr.length-2],arr[arr.length-1]];

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier (num) {
    return function (fare){
         return num*fare;
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers,firstOrLast){
    const whichDrivers = firstOrLast(drivers);
    if(whichDrivers[0] ===  drivers[0]){
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}