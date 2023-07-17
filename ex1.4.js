function removeDuplicates(str) {
    let result = "";                 
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  
console.log (removeDuplicates("hellohr"));