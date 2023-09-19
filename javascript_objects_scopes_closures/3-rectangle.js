#!/usr/bin/node
class Rectangle {
    constructor(w, h){
        
        if ((w > 0) && (h > 0)){
            this.width = w;
            this.height = h;
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
}
module.exports = Rectangle;