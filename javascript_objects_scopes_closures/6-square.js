#!/usr/bin/node
const SquareBase = require('./5-square');

class Square extends SquareBase {
  charPrint(c) {
    if (!c) {
      c = 'X';
    }
    
    let row = '';
    
    // Create a row of c characters with length of the square's size
    for (let i = 0; i < this.size; i++) {
      row += c;
    }
    
    // Print the row for the size of the square
    for (let i = 0; i < this.size; i++) {
      console.log(row);
    }
  }
}

module.exports = Square;