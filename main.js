function createMultiply2DArray(start, end) {
  let multiply2DArray = [];

  for (let i = start; i <= end; i++) {
    let row = [];
    for (let j = start; j <= i; j++) {
      row.push(createMultiplyItem(j, i));
    }
    multiply2DArray.push(row);
  }

  return multiply2DArray;
}

function createMultiplyItem(left, right) {
  return left + '×' + right + '=' + left * right;
}

function isValidInput(start, end) {
  return start <= end && start >= 1 && end <= 1000;
}

module.exports = {
    createMultiply2DArray,
    createMultiplyItem,
    isValidInput
};
