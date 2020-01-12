"use strict";
//"use strict" also ensures that apart from using only modern ES compatibility
//the variables are first declared and then used unlike previous versions


let num = 1; //try using without let
let $ = 6;
alert(num+$);

const pi = 3.14;
alert(pi);

const bignum = 1234567890123456789012345678901234567890n;
// n in the end means its a BigInt

let str = "Hello";
let sentence = `can embed anoter ${str}`;
//Use back tips to add functionalities

let age = null;
//Nothing, just emptiness
//Null is of the type "object"

typeof 10n; //BigInt

//To convert a value to string
let value = true;
value = String(Value);

alert("6"/"2"); //Gives solution as 3 (Automatic Numerical Conversion)

let str = "123";
let num = Number(str); //Convert string to number

let s ="my" + "string"; //String concatenation
alert(s);

//If one of the operand, the other is also converted to string
alert('1' + 2); //Solution is 12
alert(2+2+'1'); //Gives the solution as 41
alert('$' + 4 + 5); //Gives the solution $45 not %9

//This conversion to string is only valid for Binary + , with other
//the value is converted to number not string
alert(2 -'1'); //Solution is 1
alert("6"/"2"); //Solution is 3

//Boolean Conversion
Boolean("Hello"); //true
Boolean(""); //false

//Unary + operator used to convert a value to a number
//Its shorter that Number()
let str1 = "2";
alert(+str1); //Gives answer is Number 2;
//underfined + 1 = Nan 

//Incase of comparison between two different data types
alert('2' > 1); //True

//Strict Equality opearator '==='
//Just == cannot diffrentiate between 0 and false
//=== used if datatypes are different
alert(0 === false ); //False
alert(0 == false); //True

alert(undefined == null); //True
alert(undefined === null); //False

//For maths, null is converted to 0
alert(null > 0); //false, comparison operator convertes value to num
alert(null==0); //false , as equality operator treats undefined==null as equals, not anything else
alert(null >= 0); //true, comparison operator is used here

//Also, undefined should only be compared to null
alert(undefined == 0); //False
alert(undefined > 0); //False, undefined converted to NaN
alert(undefined < 0); //False

//To take a answer from users
let ans = prompt("Are you awesome?", "Yes");
alert(ans);

let ans1 = confirm("Are you male?");
alert(ans1); //True is OK is pressed










