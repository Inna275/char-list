import { ArrayList } from './src/list.js'

const list = new ArrayList();

const tryCatchWrapper = (fn) => {
  try {
    fn();
  } catch (err) {
    console.error(err.message);
  }
};

console.log("Length:", list.length());

list.append('a');
console.log(list.elements);
console.log("Length:", list.length());

tryCatchWrapper(() => list.append(1));

list.insert('b', 0);
console.log(list.elements);

tryCatchWrapper(() => list.insert('c', -1));
tryCatchWrapper(() => list.insert('d', 10));
