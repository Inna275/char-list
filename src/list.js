import { validateElement, validateIndex } from './validation.js';

class ArrayList {
  constructor() {
    this.elements = [];
  }

  length() {
    return this.elements.length;
  }

  append(element) {
    validateElement(element);
    this.elements.push(element);
  }

  insert(element, index) {
    validateElement(element);
    validateIndex(index, this.length());
    this.elements.splice(index, 0, element);
  }
}

export { ArrayList };
