// Code your solution here
/*function findMatching(arrayOfDrivers, name){
    let newDrivers = [];

    for (const driver of arrayOfDrivers) {
        if (driver.toUpperCase() === name.toUpperCase()){
            newDrivers.push(driver);
        }
    }
    return newDrivers;
}
*/

function findMatching(arrayOfDrivers, name){
    return arrayOfDrivers.filter(function (driver){
        return driver.toUpperCase() === name.toUpperCase();
    })  
}

function fuzzyMatch(arrayOfDrivers, letters){
    let lettersLength = letters.length;
    return arrayOfDrivers.filter(function (driver){
        return driver.substring(0, lettersLength) === letters;
    })
}

function matchName(driverObjects, driverName){
    return driverObjects.filter(function (driver){
        return driver.name === driverName;
    })
}