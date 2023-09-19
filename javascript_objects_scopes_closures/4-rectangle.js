#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Return an empty object if w or h is not a positive integer
        return {};
      }
    }
    
    print() {
      let row = '';
      
      // Create a row of X characters with width of the rectangle
      for (let i = 0; i < this.width; i++) {
        row += 'X';
      }
      
      // Print the row for the height of the rectangle
      for (let i = 0; i < this.height; i++) {
        console.log(row);
      }
    }
    
    rotate() {
      // Swap the values of width and height
      [this.width, this.height] = [this.height, this.width];
    }
    
    double() {
      // Multiply the values of width and height by 2
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;