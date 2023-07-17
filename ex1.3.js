function findRightmostRoundNumberPosition(numbers) {
    let position = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] % 10 === 0) {
        position = i + 1;
        break;
      }
    }
    return position;
  }
  const numbers = [2, 5, 10, 13, 20, 25, 30, 40 ];
const position = findRightmostRoundNumberPosition(numbers);
console.log(position); 
