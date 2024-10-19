// Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Create a fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function that returns either the first or last two drivers
  const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
  };