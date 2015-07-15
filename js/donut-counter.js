//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not.

var guests = prompt("Please enter the number of guests who are attending:");
var donuts = prompt("Please enter the number of donuts you have:");

var report = "You have " + donuts + " donuts for " + guests + " guests.";

if ( parseInt(donuts)/parseInt(guests) >= 1 ) {
    alert(report +  " You have enough donuts.");
} else {
    alert(report +  " You DO NOT have enough donuts.");
}