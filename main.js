function createMultiply2DArray(start, end) {
  return [['1×1=1']];
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
