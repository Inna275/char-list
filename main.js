const DoublyLinkedList = require('./src/list.js');

const list = new DoublyLinkedList();

console.log("Initial length:", list.length());

list.append('a');
console.log("List after appending 'a':", list.toString());

console.log("Length:", list.length());

list.insert('b', 0);
console.log("List after inserting 'b' at index 0:", list.toString());

console.log("Deleted element:", list.delete(0));
console.log("List after deleting element at index 0:", list.toString());

list.append('e');
list.append('e');
list.append('e');
console.log("List after appending 'e' three times:", list.toString());

list.deleteAll('e');
console.log("List after deleting all 'e':", list.toString());

console.log("Element at index 0:", list.get(0));

console.log("Cloned list:", list.clone().toString());

list.append('b');
console.log("List before reversing:", list.toString());
list.reverse();
console.log("List after reversing:", list.toString());

list.append('a');
console.log("List after appending 'a':", list.toString());
console.log("First occurrence of 'a':", list.findFirst('a'));
console.log("Last occurrence of 'a':", list.findLast('a'));

const list2 = new DoublyLinkedList();
list2.append('j');
list2.append('s');

console.log("New list to extend with:", list2.toString());

list.extend(list2);
console.log("List after extending:", list.toString());

list.clear();
console.log("List after clearing:", list.toString());
