const { ArrayList } = require('../src/list.js');

describe('ArrayList', () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test('length() returns 0 for empty list', () => {
    expect(list.length()).toBe(0);
  });

  test('length() returns correct length', () => {
    list.append('a');
    expect(list.length()).toBe(1);
  });

  test('append() adds element to the end of the list', () => {
    list.append('a');
    list.append('b');

    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b'); 
  });

  test('insert() adds element at the correct position', () => {
    list.append('a');
    list.append('b');

    list.insert('c', 1);

    expect(list.get(1)).toBe('c');
  });

  test('insert() throws error for negative index', () => {
    expect(() => list.insert('a', -1)).toThrowError();
  });

  test('insert() throws error for index out of range', () => {
    list.append('a');
    expect(() => list.insert('a', 5)).toThrowError();
  });

  test('delete() removes element and returns it', () => {
    list.append('a');

    expect(list.delete(0)).toBe('a'); 
    expect(list.length()).toBe(0);
  });

  test('delete() throws error for negative index', () => {
    expect(() => list.delete(-1)).toThrowError();
  });

  test('delete() throws error for index out of range', () => {
    list.append('a');
    expect(() => list.delete(5)).toThrowError();
  });

  test('deleteAll() removes all occurrences', () => {
    list.append('a');
    list.append('a');
    
    list.deleteAll('a');
  
    expect(list.length()).toBe(0);
  });
  
  test('deleteAll() does nothing if element is absent', () => {
    list.append('a');
    list.append('b');
  
    list.deleteAll('c');
  
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
  });

  test('get() returns correct element at given index', () => {
    list.append('a');
    list.append('b');
  
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
  });
  
  test('get() throws error for negative index', () => {
    expect(() => list.get(-1)).toThrowError();
  });
  
  test('get() throws error for index out of range', () => {
    list.append('a');
    expect(() => list.get(1)).toThrowError(); 
  });
  
  test('clone() returns a list with the same elements', () => {
    list.append('a');
    list.append('b');
  
    const cloned = list.clone();
  
    expect(cloned.length()).toBe(2);
    expect(cloned.get(0)).toBe('a');
    expect(cloned.get(1)).toBe('b');
  });

  test('reverse() reverses the order of elements', () => {
    list.append('a');
    list.append('b');
  
    list.reverse();
  
    expect(list.get(0)).toBe('b');
    expect(list.get(1)).toBe('a');
  });

  test('findFirst() returns correct index of first occurrence', () => {
    list.append('a');
    list.append('b');
    list.append('b');
    
    expect(list.findFirst('b')).toBe(1);
  });
  
  test('findFirst() returns -1 if element is not found', () => {
    list.append('a');
    list.append('b');
    
    expect(list.findFirst('c')).toBe(-1);
  });

  test('findLast() returns correct index of last occurrence', () => {
    list.append('a');
    list.append('b');
    list.append('b');
    
    expect(list.findLast('b')).toBe(2);
  });
  
  test('findLast() returns -1 if element is not found', () => {
    list.append('a');
    list.append('b');
    
    expect(list.findLast('c')).toBe(-1);
  });

  test('clear() removes all elements from the list', () => {
    list.append('a');
    
    list.clear();
    
    expect(list.length()).toBe(0);
  });

  test('extend() adds elements of another list to the current list', () => {
    list.append('j');
    
    const list2 = new ArrayList();
    list2.append('s');

    list.extend(list2);
    
    expect(list.length()).toBe(2);
    expect(list.get(1)).toBe('s');
  });

  test('after extend(), the first list does not change when the second list is updated', () => {
    list.append('j');

    const list2 = new ArrayList();
    list2.append('s');
    
    list.extend(list2);
    
    list2.append('t');
    
    expect(list.length()).toBe(2);
  });
});
