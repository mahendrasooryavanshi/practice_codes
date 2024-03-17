// find min and max
let array = [1, 56, 9, 1, 0, -1, 10];
let length = array.length;
let min, max, i;
if (length % 2 == 0) {
  if (array[0] > array[1]) {
    max = array[0];
    min = array[1];
  } else {
    max = array[1];
    min = array[0];
    i = 2;
  }
} else {
  min = array[0];
  max = array[0];
  i = 1;
}
while (i < length - 1) {
  if (array[i] > array[i + 1]) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < array[i + 1]) {
      min = array[i + 1];
    }
  } else {
    if (array[i + 1] > max) {
      max = array[i + 1];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  i += 2;
}
console.log(`MAx : ${max} || min: ${min}`);
