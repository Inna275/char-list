# char-list

This project implements a custom list with operations like ***length, append, insert, delete, deleteAll, get, clone, reverse, findFirst, findLast, clear, and extend.***

## Variant calculation
*3(my number in the group list) % 4 = 3*

The first implementation was an [array based list](https://github.com/Inna275/char-list/tree/8ece01c31bdb96b5c55cb728da1db3dcd72dc09d). 
After refactoring, it changed to a doubly linked list.

## How to run
1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repo:
  ```bash
  git clone https://github.com/Inna275/char-list.git
  ```
3. Navigate to the project folder:
  ```bash
  cd char-list
  ```
4. Install dependencies:
  ```bash
  npm install
  ```
5. Run demo:
  ```bash
  node main.js
  ```
6. Run tests: 
  ```bash
  npm test
  ```
[Commit with failing tests on CI](https://github.com/Inna275/char-list/commit/7ad5b354601f628b583c655049931f0a6ce7a741)

## Conclusion
Unit tests were useful in this project. They helped me quickly find and fix issues, especially when refactoring the list. They gave me confidence that the list operations work correctly.
