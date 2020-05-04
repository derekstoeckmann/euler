const fiboEvenSum = (n) => {
  let num1 = 0;
  let num2 = 1;
  let current = num1 + num2;
  let sumOfEvens = 0;

  while (true) {
    if (current >= n) return sumOfEvens;

    num1 = num2;
    num2 = current;
    current = num1 + num2;

    if (current % 2 === 0) sumOfEvens += current;
  }
};
