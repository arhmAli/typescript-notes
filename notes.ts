It is dynamically typed language.

We have to explitly tell the type of data e.g

let firstValue:number=5;

we can also give type to one variable to another for example.

let someVar=10;

let newVar:someVar=123

This will check the type of data stored in someVar and then assign that to newVar

ANY type

The following example will take any type and convert into specified type

let something:any=100;

let anotherOne=something as number;
		OR
let anotherOne=<number>something;

ARRAYS

let arr:string[]=["hello","world","string_type"]
		OR
let arr:Array<string>=["hello","world","string_type"]
		
TUPLES
They hold multiple datas just like arrays but they can have different types of data

let tup:[string,string,number]=["typescript","learning",10]

we can also make array of tuples:
let arrOfTup:[number,string][]=[[5,"bannaa"],[10,"apples"]]

Functions:
Now we can also declare the inputs and also we can specify
what type of outputs are needed as return to the function

function(firstNum:number,secNum:number):number{
return firstNum+secNum
}

IF we wish to not return anything at all from a function
we can use void as

function(firstNum:number,secNum:number):void{
//this shouldn't return anything
}

ENUM:
This allows us to declare some constant with numeric or string 
values for example:

enum bookCategories{
	history,	bydefaultitisgiven=>0
	numOfBooks,	bydefaultitisgiven=>1
	numOfShelves,	bydefaultitisgiven=>2
}

NOW we can also specify the numbers like

enum meatStock{
	chicken=100,
	mutton=20,
	beef,
NOTICE THAT BEEF DOES NOT HAVE ANYTHING SO IT WILL
OBTAIN THE NEXT INDEX OF PREVIOUSLY DEFINED VALUE
FOR INSTANCE IN THIS CASE 21
}

We can also make combination of strings and numbers
in ENUM it is no problem.

INTERFACE

THIS DEFINES A SPECIFIC STRUCTURE FOR AN OBJECT 

interface videoRequest{
	id:number,
	title:string,
	comments:string,
	likes:number,
	dislikes?:number,
			THE ? INDICATES THAT IT CAN EITHER HAVE DISLIKES OR NOT
	readonly username:string,
			THIS INDICATES THAT IT CAN ONLY BE ASSIGNED WHEN INITILIAZED 
}

