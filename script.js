var shopper = {
    firstName: "Joe",
    lastName: "Biden",
    age: 100,
    member: true,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
shopper.groceryCart = ["apples", "beer", "cheese", "bread"];
console.log(shopper.fullName(), shopper.age);
console.log(shopper.groceryCart);


/*Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

String
Number
Boolean
Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

Starter code:*/