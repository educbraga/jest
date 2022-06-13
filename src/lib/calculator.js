export function sum(num1, num2) {
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Cannot sum non-numeric values');
  }

  return int1 + int2;
}
