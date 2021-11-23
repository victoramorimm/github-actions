test("adds 1 + 2 to equal 3", () => {
  const firstNumber = 1;
  const secondNumber = 2;

  const sum = firstNumber + secondNumber;

  expect(sum).toBe(3);
});

test("adds 4 + 2 is not equal to 3", () => {
  const firstNumber = 4;
  const secondNumber = 2;

  const sum = firstNumber + secondNumber;

  expect(sum).toBe(3);
});
