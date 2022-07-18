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
        return "My name is"+" "+this.name+".I am"+" "+this.age+" "+"years old"+".My email id is"+" "+this.email+".Catch me up in"+" "+this.phoneno+".My father name is"+" "+this.fathername+".My mother name is"+" "+this.mothername;
    }
}
var det = new Person("MonikaDhanasekaran",22,"moni123@gmail.com",34567789,"Dhanasekaran","Amsavalli");
console.log(det.getDetails());