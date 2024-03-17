// reverse the array
let array = [1, 2, 6, 3, 8, 9, 10, 0];
let reversArr = [];
for (let i = 0; i < array.length / 2; i++) {
  let temp = array[array.length - i - 1];
  array[array.length - i - 1] = array[i];
  array[i] = temp;
}
console.log(array);
