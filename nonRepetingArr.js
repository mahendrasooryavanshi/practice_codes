let arr = [1, 1, 2, 1, 0, -10, 3, 3, 5];

function nonRepeatableNo(arr) {
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      val.push(arr[i]);
    }
  }
}
nonRepeatableNo(arr);
