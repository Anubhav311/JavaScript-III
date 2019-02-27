/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding:- this points to browser window when we call it from the window. 
* 2. Implicit binding:- when this is inside of a method function, this will point to the object to which that function is a method.
* 3. New binding:- this points to the object being created by calling the constructor function with 'new' keyword.
* 4. Explicit binding:- we can use bind, call or apply methods to get 'this' to point to other objects.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);
function example(){
    console.log(this);
}
example();

// Principle 2
// code example for Implicit Binding
const obj = {
    name: "Implicit",
    purpose: "Practice",
    speak: function() {
        console.log(`${this.name} means automatic.`)
    }
}
obj.speak();

// Principle 3
// code example for New Binding
function Human(obj) {
    this.gender = obj.gender;
    this.age = obj.age;
    this.weight = obj.weight;
}
const james = new Human({gender: "male", age: 20, weight: 75});
console.log(james);

// Principle 4
// code example for Explicit Binding
function Male(obj) {
    Human.call(this, obj);
    this.voice = obj.voice;
}
const jason = new Male({gender: "male", age: 25, weight: 85, voice: "heavy"});
console.log(jason)