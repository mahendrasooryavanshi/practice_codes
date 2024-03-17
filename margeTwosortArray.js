// merge two sorted array

let array1 = [1, 5, 3, 6, 0, 1];
let array2 = [1, 5, 9, 10, 11, 3, 6, 0];
let array3 = [];
let length1 = array1.length;
let length2 = array2.length;
let i = 0;
let j = 0;
let k = 0;
while (i < length1 && i < length2) {
  if (array1[i] < array2[j]) {
    const element = array1[i++];
    array3.push(element);
  } else {
    const element = array2[j++];
    array3.push(element);
  }
}
while (i < length1) {
  const element = array1[i++];
  array3.push(element);
}
while (j < length2) {
  const element = array2[j++];
  array3.push(element);
}

console.log(array3);
