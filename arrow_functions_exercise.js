// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const double = arr =>  arr.map(val =>  val * 2)

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

  const squareAndFindEvens = nums => nums.map(val => val ** 2).filter(square => square % 2 === 0)
  
  
//   const squareAndFindEvens = (numbers => numbers.map((num => num ** 2)){
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }


const squareAndFindEvensAgain = (numbers = [numbers]) => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

//i keep getting an error saying nums.map (numbers.map in the bottom where I tried again) is not a function...
// the function squareAndFindEvensAgain is a constant variable that is equal to numbers (tried setting it to an empty array because .forEach only works on arrays). Iterate over these numbers and doubles the value. then filter the values that're even.