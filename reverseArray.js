// reverse array

class Solution {
  reverseArr(array, N) {
    let newArr = [];
    for (let i = N - 1; i >= 0; i--) {
      const element = array[i];
      newArr.push(element);
    }
    return newArr;
  }
}
let solution = new Solution();
let array = [1, 5, 3, 6, 9, -1, 0, 1, 100];
const N = array.length;
const result = solution.reverseArr(array, N);
console.log(result);
