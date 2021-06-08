const prompt = require('prompt-sync')({sigint: true});


//List of constants; Challenge 1

const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

//message displayed

  console.log(students)

//Challange 2 reverse order of number; constants listed

  const grades = [100, 80, 110, 75, 83, 64];

//Output

  grades.reverse();
  console.log(grades)

//Challange 3 Display only even number

const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

//Use slice array technique 



while (positiveNumbers %2 == 0){
  console.log(positiveNumbers)
}


//Challenge 4 


const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
console.log(symmetricalCapitals)
const spliceStartaIndex = 0;
const spliceStarthIndex = 1;
const spliceStartyIndex = 10;
symmetricalCapitals.splice(spliceStartaIndex, spliceStarthIndex, spliceStartyIndex);
console.log(symmetricalCapitals)









// Slice (create a copy of a part of an array)
const sandwich = ['bread', 'pb', 'j'];
const sliceStartIndex = 1;
const sliceEndIndex = 3;
const partialSandwich = sandwich.slice(sliceStartIndex, sliceEndIndex);
console.log(partialSandwich);

// Splice
console.log(sandwich);
const spliceStartIndex = 1;
const numItemsToRemove = 2;
sandwich.splice(spliceStartIndex, numItemsToRemove);
console.log(sandwich);