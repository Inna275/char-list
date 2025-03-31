const { ArrayList } = require('./src/list.js');

const list = new ArrayList();

console.log("Initial length:", list.length());

list.append('a');
console.log("List after appending 'a':", list.elements);

console.log("Length:", list.length());

list.insert('b', 0);
console.log("List after inserting 'b' at index 0", list.elements);

console.log("Deleted element:", list.delete(0));
console.log("List after deleting element at index 0:", list.elements);

list.append('e');
list.append('e');
list.append('e');
console.log("List after appending 'e' three times:", list.elements);

list.deleteAll('e');
console.log("List after deleting all 'e':", list.elements);

console.log("Element at index 0:", list.get(0));

console.log("Cloned list:", list.clone().elements);

list.append('b');
console.log("List before reversing:", list.elements);
list.reverse();
console.log("List after reversing:", list.elements);

list.append('a');
console.log("List after appending 'a':", list.elements);
console.log("First occurrence of 'a':", list.findFirst('a'));
console.log("Last occurrence of 'a':", list.findLast('a'));

const list2 = new ArrayList();
list2.append('j');
list2.append('s');

console.log("New list to extend with:", list2.elements);

list.extend(list2);
console.log("List after extending:", list.elements);

list.clear();
console.log("List after clearing:", list.elements);
