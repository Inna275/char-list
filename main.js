import { ArrayList } from './src/list.js'

const list = new ArrayList();

console.log("Length:", list.length());

list.append('a');
console.log(list.elements);
console.log("Length:", list.length());

try {
  list.append(1);
} catch (err) {
  console.error(err.message);
}
