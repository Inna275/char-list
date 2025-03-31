const Node = require('./node.js');
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

    const newNode = new Node(element, this.tail);
  
    if (!this.head) { 
      this.head = this.tail = newNode;
    } else { 
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  insert(element, index) {
    validateElement(element);
    validateIndex(index, this.length());

    const newNode = new Node(element);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      
    } else if (index === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;

    } else {
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    this.size++;
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
