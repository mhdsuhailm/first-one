function swapAdjacentDigits(num) {
    
    const digitArray = Array.from(String(num), Number);
  
    
    for (let i = 0; i < digitArray.length; i += 2) {
            [digitArray[i], digitArray[i + 1]] = [digitArray[i + 1], digitArray[i]];
    }
  
    
    const swappedNum = Number(digitArray.join(''));
  
    return swappedNum;
  }
  
  
  const num = 123456;
  const swappedNum = swapAdjacentDigits(num);
  console.log(`Original number: ${num}`); 
  console.log(`Swapped number: ${swappedNum}`);