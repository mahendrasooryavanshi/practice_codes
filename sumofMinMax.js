class Solution {
  sumofMin_max(array, N) {
    let max = parseInt(array[0]);
    let min = parseInt(array[0]);

    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (max < array[i]) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    sum = min + max;
    return sum;
  }
}

let solve = new Solution();
let array = [1, 5, 3, -10, 9, 10];
let N = array.length;
let funObj = solve.sumofMin_max(array, N);
console.log(funObj);
