console.log("Hello World")

//Variables : 
//Declaring variables
//= Assignment operator

//Camel case
var myName = "Shivangi";
console.log(myName);

var age = 23;
console.log(age);

//Data types :
console.log(typeof(myName))
console.log(typeof(age))

//Boolean data-type :
var trueOrFalse = false;
console.log(typeof(trueOrFalse))

//Null :
var nullVariable = null;

//Undefined Variable
var undefinedVariable;

console.log(typeof(nullVariable))
console.log(typeof(undefinedVariable))

//Concatenation operator (+)
//Joins 2 strings, one string , one number, 
console.log("My Name is : " + myName);
console.log("Hello " + "hi");
console.log("Age is : " + 30);

//Arithmetic operators :
console.log(20 + 30);
console.log(20 * 30);
console.log(20 / 30);
console.log(20 - 30);

//Modulo operator :
var remaninder = 61%6
console.log("Remainder is : " + remaninder);


// Assignment operator (=) 

//Comparison operators :
// == Does not check the datatype, only checks value
// === checks the datatype

var a = 10;
var b = '10';

console.log(a==b)
console.log(a===b)

//Not Equal to (!=)
console.log(5!=10);

//Greater than OR equal to
console.log(10>=10);

//Logical Operators :
var x=20;
var y=-10;

//Logical AND (&&)
console.log(x>y && y>0);

//Logical OR (||)
console.log(x>y || y>0);

//Logical NOT (!)
console.log(!false);

//Conditional statements :

//if else statement

var myAge = 17;

if(myAge>=18)
{
    console.log("Can vote");
}
else
{
    console.log("Cannot vote");
}

//if else-if
var marks = 50;

if(marks<=100 && marks>=90)
{
    console.log("A grade");
}
else if(marks<90 && marks>=80)
{
    console.log("B grade");
}
else
{
    console.log("Fail");
}

//DRY -> Don't repeat yourself

//Loops :

//While loop
var num=20;
while(num<=10)
{
    console.log("While loop " +num);
    num=num+1;
}
//do-while loop :- Executes the loop atleast once, even if the condition is false
num1 = 20;
do
{
    console.log("do-While loop "+num1);
    num1=num1+1;
} while(num1<=10);

//for loop
console.log("For loop : ");

//(starting, condition, increment/decrement)
for(var num=10; num>=0; num=num-1)
{
    console.log(num);
}