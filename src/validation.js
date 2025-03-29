const { isChar, isValidIndex } = require('./utils.js');

const validateElement = (element) => {
  if (!isChar(element)) {
    throw new Error("Element is not a char");
  }
};

const validateIndex = (index, length) => {
  if (!isValidIndex(index, length)) {
    throw new Error("Invalid index");
  }
};

module.exports = { validateElement, validateIndex };
