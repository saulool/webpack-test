require('./sass/style.scss');

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
    getX () {
    	return this.x;
    }

    getY () {
    	return this.y;
    }
}

let newShape = new Shape(1, 100, 10);