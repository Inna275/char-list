const isChar = (element) => {
  return typeof element === 'string' && element.length === 1;
};

const isValidIndex = (index, length) => {
  return Number.isInteger(index) && index >= 0 && index < length;
};

export { isChar, isValidIndex };
