import { isChar } from './utils.js';

class ArrayList {
  constructor() {
    this.elements = [];
  }

  length() {
    return this.elements.length;
  }

  append(element) {
    if (!isChar(element)) {
      throw new Error("Element is not a char");
    }
    this.elements.push(element);
  }
}

export { ArrayList };
