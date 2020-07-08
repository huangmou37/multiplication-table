
function isValidInput (start, end) {
    return start <= end && start >= 1 && end <= 1000;
}

module.exports = {isValidInput};
