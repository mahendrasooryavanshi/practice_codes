// program to prin fabonnaci series without using recursion
let n1, n2, n3;
const number = 5;
n1 = 0;
n2 = 1;
for (let i = 0; i < number; i++) {
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
