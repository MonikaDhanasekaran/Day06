Day06 - OOPs Task:

1.

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        return "The rating of the Movie is"+" "+this.rating;
    }
}

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getPG(){
        return "The rating of the Movie is"+" "+this.rating;
    }
}

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getPG(){
        return "The rating of the Movie is"+" "+this.rating;
    }
    set changename(m){
        this.rating=m;
    }
}
var CasinoRoyale = new Movie('Casino Royale','EON Productions','PG');
CasinoRoyale.changename="PG13";
console.log(CasinoRoyale);

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG13”.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getPG(){
        return "The rating of the Movie is"+" "+this.rating;
    }
    set changename(m){
        this.rating=m;
    }
}
var CasinoRoyale = new Movie('Casino Royale','EON Productions','PG');
console.log(CasinoRoyale);

2.

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

3.Write a “person” class to hold all the details.

class Person{
    constructor(name,age,email,phoneno,fathername,mothername){
        this.name=name;
        this.age=age;
        this.email=email;
        this.phoneno=phoneno;
        this.fathername=fathername;
        this.mothername=mothername;
    }
    getDetails(){
        return "My name is"+" "+this.name+"I am"+" "+this.age+" "+"years old"+"My email id is"+" "+this.email+"Catch me up in"+" "+this.phoneno+"My father name is"+"                   "+this.fathername+"My mother name is"+" "+this.mothername;
    }
var det = new Person("MonikaDhanasekaran",22,"moni123@gmail.com",34567789,"Dhanasekaran","Amsavalli");
console.log(det.getDetails()); 
}

4.write a class to calculate the uber price.

var baseFee = .44
var cities = ["Providence", "Boston", "New York", ]
var uberRates = [5, 10, 15]
var customerName = "Wendy" 
let customerCity = "Providence" 
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
  //uberRate function that will calculate the rate based on customerCity and index
  function uberRate(customerCity, index) {
    //calculate the final rate
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  //log to the console customerCity and the finalRate after calling function uberRate and passing customerCity and index as parameters
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
//call the getRate function passing in the customerCity arugment
getRate(customerCity)
