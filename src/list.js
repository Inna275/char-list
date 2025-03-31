const { validateElement, validateIndex } = require('./validation.js');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
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

  get(index) {
    validateIndex(index, this.length());
    return this.elements[index];
  }

  clone() {
    const copy = new DoublyLinkedList();

    for (let i = 0; i < this.elements.length; i++) {
      copy.append(this.elements[i]);
    }

    return copy;
  }

  reverse() {
    this.elements.reverse();
  }

  findFirst(element) {
    return this.elements.indexOf(element);
  }

  findLast(element) {
    return this.elements.lastIndexOf(element);
  }

  clear() {
    this.elements = [];
  }

  extend(elements) {
    if (!(elements instanceof DoublyLinkedList)) {
      return;
    } 
    this.elements.push(...elements.elements);
  }
}

module.exports = DoublyLinkedList;
