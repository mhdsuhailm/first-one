function generateRandomString(length) {
    const alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numSpecialChars = "!@#$%";
    let result = "";
    result += alphaChars.charAt(Math.floor(Math.random() * alphaChars.length));
    for (let i = 1; i < length; i++) {
      const charSet = Math.floor(Math.random() * 5); // Choose between 0 and 1
      if (charSet === 0) {
        result += Math.floor(Math.random() * 9).toString(); // Add a digit
      } else {
        result += numSpecialChars.charAt(Math.floor(Math.random() * numSpecialChars.length)); // Add a special character
      }
    }
    return result;
  }
  
  
console.log(generateRandomString(10)); 
  