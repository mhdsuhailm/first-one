function convertAgeToDays(age) {
    var days = age * 365; 
  
    return days;
  }
  
  
  var ageInYears = 25;
  var ageInDays = convertAgeToDays(ageInYears);
  console.log("Age in days:", ageInDays);
  