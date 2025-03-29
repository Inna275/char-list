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

  delete(index) {
    validateIndex(index, this.length());
    const deleted = this.elements.splice(index, 1)[0];
    return deleted;
  }

  deleteAll(element) {
    validateElement(element);

    if (!this.elements.includes(element)) {
      return;
    }

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === element) {
        this.elements.splice(i, 1);
        i--;
      }
    }
  }
}

export { ArrayList };
