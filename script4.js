var baseFee = .44
var cities = ["Providence","Boston","Newyork"];
var uberRates = [5, 10, 15]
var customerName = prompt("What is your name?") 
var customerCity = prompt("What is your city?") 
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
  function uberRate(customerCity, index) { 
    var finalRate = (uberRates[index]) * baseFee
    return finalRate 
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity))) 
}
getRate(customerCity)