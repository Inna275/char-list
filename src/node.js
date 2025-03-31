class Node {
  constructor(element, prev = null, next = null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

module.exports =  Node;
