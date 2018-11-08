const practiceSolutions = [
      `  exponent(4, 4);
      
  function exponent(num, powerOf) {
    if (powerOf === 0) {
      return 1;
    } else {
      return num * exponent(num, powerOf-1);
    }
  }`,
      `  const arr = [5, 7, 2, 4, 24];
  sum(arr);

  function sum(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      return arr.pop() + sum(arr);
    }
  }`,
      `  const arr = [9, 6, 8, 4, 1, 5, 3, 2];
  mergeSort(arr);

  function mergeSort(arr) {
    if (arr.length < 2) { return arr }
    const firstHalf = mergeSort(arr.splice(0, 
      Math.floor(arr.length / 2)));
    const secondHalf = mergeSort(arr);
    return merge(firstHalf, secondHalf);
  }

  function merge(firstHalf, secondHalf) {
    const finalArr = [];
    const count = firstHalf.length + secondHalf.length;
    for (let i = 0; i < count; i++) {
      if (firstHalf[0] < secondHalf[0] ||
        !secondHalf[0]) {
        finalArr.push(firstHalf.shift());
      } else {
        finalArr.push(secondHalf.shift());
      }
    }
    return finalArr;
  }`];

  module.exports = practiceSolutions;