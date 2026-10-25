// Question no-1
// alert("Welcome to our website");
// Question no-2
// alert("Error! Please enter a Valid password");
// Question no-3
// alert("welcom to js land...\n happy coding");
// Qestion no-4
// alert("massage-1 Welcome to js land...");
// alert(" massage-2 Prevet this page from creating additional dialogs.");
// Qestion no-5
// console.log("Hello... I can run JS through my web browser's console");

// chapter no-2
// Qestion no-1 and-2 and-3 and-4

// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Appliation Development";

// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// Qestion no-5
// var pattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pattern);
// Qestion no-6
// var email = "amanali@example.com";
// alert("My email address is " + email);
// Qestion no-7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// Qestion no-9
// var designString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designString);
// question-1
// var age = 15;
// alert("I am " + age + " years old");
// question-2
// var Visits = 14;
// alert("You have visited this site " + Visits + " times");
// question-3
// var birthYear = 2005;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear);
// question-4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");
// chapter no 4
// var quantity =1
// var variable1, variable2, variable3;
// var quantity =2
// var userName;
// var _age;
// var $price;
// var total_amount;
// var student1;
// var varOne, varTwo, varThree;
// var quantity =3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write(
//   "Variable names can only contain numbers, $ and _. For example : $my_1stVariable<br>",
// );
// document.write(
//   "Variable must begin with a letter, $ or _. For example : $name, _name or name<br>",
// );
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");
// chapter-5
// question-1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum)
// question-2
// question-3
// var num;
// document.write("Value after variable declaration is " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// var remainder = num % 3;
// document.write("The remainder is : " + remainder);

// question-4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");
// question-5
// var num = 4;
// document.write("Table of " + num + "<br>");
// document.write(num + " x 1 = " + num * 1 + "<br>");
// document.write(num + " x 2 = " + num * 2 + "<br>");
// document.write(num + " x 3 = " + num * 3 + "<br>");
// document.write(num + " x 4 = " + num * 4 + "<br>");
// document.write(num + " x 5 = " + num * 5 + "<br>");
// document.write(num + " x 6 = " + num * 6 + "<br>");
// document.write(num + " x 7 = " + num * 7 + "<br>");
// document.write(num + " x 8 = " + num * 8 + "<br>");
// document.write(num + " x 9 = " + num * 9 + "<br>");
// document.write(num + " x 10 = " + num * 10 + "<br>");
// question-6
// var celsiusTemp = 25;
// var fahrenheitConverted = (celsiusTemp * 9) / 5 + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitConverted + "°F<br>");
// var fahrenheitTemp = 70;
// var celsiusConverted = ((fahrenheitTemp - 32) * 5) / 9;
// document.write(fahrenheitTemp + "°F is " + celsiusConverted + "°C");

// Items ki prices aur quantities ko variables mein store karna
var item1Price = 650;
var item1Quantity = 3;

var item2Price = 100;
var item2Quantity = 7;

var shippingCharges = 100;

// Total cost calculate karna
var totalCost =
  item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;

// Browser par result show karna
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);
