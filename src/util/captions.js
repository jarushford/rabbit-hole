const captions = ['First we will create an array of numbers to run our quickSort   function on.',
  'Then, we will invoke our quickSort function and pass in that array.',
  'On line 5, we check if the length of our array is less than 2. This is our base case: the condition that will eventually kick us out of this function and prevent us from entering an infinite loop.',
  'If our array is still 2 items or longer, we will pop off the last element and store it in a variable called "pivot". We will also create two empty arrays: lT (less than our pivot) and gT (greater than our pivot).',
  'Then, for each number left in our initial array, we will check if it is less than or greater than our pivot and push it into the appropriate array.',
  'We will then concatenate our lT array, our pivot, and our gT array. But, since we don\'t yet know if our lT and gT arrays are fully sorted, we can\'t return yet. We must run quickSort on each of these first.',
  'So, for each array, we move back up to line 5 to check if our array is 2 items or less. It is still 2 items long, so we don\'t return yet.',
  'Just like last time, we pop off the last element to use as our pivot and create lT and gT arrays.',
  'And again, we iterate through our initial array, compare to our pivot, and push any remaining numbers into the correct array.',
  'Even though we can now see that our arrays are less than 2 items, the computer has not yet hit our base case, so it doesn\'t know to stop. So one last time, we run quickSort on our lT and gT arrays (four of them now).',
  'This time, when we check if our array is less than 2 items it is true for all four arrays!',
  'So now we can simply return the array that was passed into quickSort which will complete the concatenation in the upstream quickSort function.',
  'Now the return statement in those quickSorts can occur, passing sorted lT and gT arrays up to our initial quickSort function call.',
  'And finally, our initial quickSort can return a fully sorted array!'];

  module.exports = captions;