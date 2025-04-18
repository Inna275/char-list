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
    
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      newNode.prev = current;
      if (current.next) current.next.prev = newNode;
      current.next = newNode;
    }

    this.size++;
  }

  delete(index) {
    validateIndex(index, this.length());

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      if (this.head === null) this.tail = null;

    } else {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
  
      if (current.prev) current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
  
      if (current === this.tail) {
        this.tail = current.prev;
      }
    }

    this.size--;
    return current.element;
  }

  deleteAll(element) {
    validateElement(element);

    let current = this.head;

    while (current) {
      if (current.element === element) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
  
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
  
        this.size--;
      }
  
      current = current.next;
    }
  }

  get(index) {
    validateIndex(index, this.length());

    let current = this.head;
  
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.element;
  }

  clone() {
    const copy = new DoublyLinkedList();
  
    for (let current = this.head; current !== null; current = current.next) {
      copy.append(current.element);
    }
  
    return copy;
  }

  reverse() {
    let current = this.head;
    let temp = null;
  
    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.prev;
    }
  
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  findFirst(element) {
    let current = this.head;
    let index = 0;
  
    while (current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
  
    return -1;
  }

  findLast(element) {
    let current = this.tail;
    let index = this.size - 1;
  
    while (current) {
      if (current.element === element) return index;
      current = current.prev;
      index--;
    }
  
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(elements) {
    if (!(elements instanceof DoublyLinkedList)) {
      return;
    }
  
    let current = elements.head;
  
    while (current) {
      this.append(current.element);
      current = current.next;
    }
  }

  toString() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.element);
      current = current.next;
    }

    return result.join(" ⇄ ");
  }
}

module.exports = DoublyLinkedList;
