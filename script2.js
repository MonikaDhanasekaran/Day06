class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(rad){
        this.radius=rad;
    }
    getColor(){
        return this.color;
    }
    setColor(col){
        this.color=col;
    }
    getArea(){
        return (Math.PI)*this.radius*this.radius;
    }
    getCircumference(){
        return 2*(Math.PI)*this.radius;
    }
}
var c = new Circle(1.0,'Red');
console.log("Radius:"+" "+c.radius);
console.log("Color:"+" "+c.color);
var c1 = new Circle();
console.log(c1.toString());
var c2 = new Circle(3.5);
console.log(c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("Get Radius:"+" "+c3.getRadius());
console.log("Get Color:"+" "+c3.getColor());
c3.setRadius(3.3);
console.log("setRadius: " + c3.getRadius());
c3.setColor('Blue');
console.log("setColor: " + c3.getColor());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());