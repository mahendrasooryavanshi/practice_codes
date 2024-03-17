// repeting array
let array = [1, 0, 3, 6, 0, 1, -1, 3];
let duplicate = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      duplicate.push(array[i]);
    }
  }
}
console.log(duplicate);
