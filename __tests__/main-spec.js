const main = require('../main');

//  test case of isValidInput

it ('should return true when validate input given 1,1', () => {
    expect(main.isValidInput(1, 1)).toBe(true);
});

it ('should return true when validate input given 1,2', () => {
    expect(main.isValidInput(1, 2)).toBe(true);
});

it ('should return true when validate input given 1000,1000', () => {
    expect(main.isValidInput(1000, 1000)).toBe(true);
});

it ('should return false when validate input given -1,1', () => {
    expect(main.isValidInput(-1, 1)).toBe(false);
});

it ('should return false when validate input given 1,1001', () => {
    expect(main.isValidInput(1, 1001)).toBe(false);
});

//  test case of createMultiplyItem

it ('should return 2×3=6 when create multiply item given 2,3', () => {
    expect(main.createMultiplyItem(2, 3)).toBe('2×3=6');
});

//  test case of createMultiply2DArray

it ('should return correct 2D array when create multiply 2D array given 1,1', () => {
    expect(main.createMultiply2DArray(1, 1)).toEqual([['1×1=1']]);
});
