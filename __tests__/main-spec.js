const main = require('../main');

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
