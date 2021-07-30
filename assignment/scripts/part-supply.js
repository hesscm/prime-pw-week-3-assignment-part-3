console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
//Putting the results in a separate line for a cleaner look
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11]
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
supplyChanges.pop();
console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for (let i = 0; i < supplyChanges.length; i++) {
  console.log('Value:', supplyChanges[i]);
  if (supplyChanges[i] > 0) {
    console.log(`Added ${supplyChanges[i]} parts.`);
  }
  else if (supplyChanges[i] === 0) {
    console.log('No Change.');
  }
  /*This could indicate if the value is negative but it is not necessary
    as it is the only other possibility*/
  else {
    console.log(`Removed ${supplyChanges[i]} parts.`);
  }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (let i of supplyChanges) {
  /*for of already knows it is iterating through supplyChanges, so we
    do not need to write supplyChanges[i]*/
  console.log('Value:', i);
  if (i > 0) {
    console.log(`Added ${i} parts.`);
  }
  else if (i === 0) {
    console.log('No Change.');
  }
  /*This could indicate if the value is negative but it is not necessary
    as it is the only other possibility*/
  else {
    console.log(`Removed ${i} parts.`);
  }

}
// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
//initialize a variable outside of the loop
let y = 0;
while (y < supplyChanges.length) {
  console.log('Value:', supplyChanges[y]);
  if (supplyChanges[y] > 0) {
    console.log(`Added ${supplyChanges[y]} parts.`);
  }
  else if (supplyChanges[y] === 0) {
    console.log('No Change.');
  }
  /*This could indicate if the value is negative but it is not necessary
    as it is the only other possibility*/
  else {
    console.log(`Removed ${supplyChanges[y]} parts.`);
  }
  y++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
//Initialize a variable to hold total parts
let totalParts = 0;
//Loop to iterate through the array
for (var i = 0; i < supplyChanges.length; i++) {
  //Update totalParts by adding each element of supplyChanges
  totalParts = supplyChanges[i] + totalParts;
}
//Log is outside of the loop so you only have one total answer
console.log('Total supplies:', totalParts);
