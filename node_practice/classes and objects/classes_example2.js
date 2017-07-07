class Shape {
    constructor (id, x, y) {
        this._id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
	    
	set id (v) {
	this._id=v;
	}

	get id (){
	return this._id;
	}
}


var shape = new Shape(1,2,3);
//shape.id=100; 
console.log(shape.id);
