let username = "John";
function showMsg()
{
    username = "Bob";
    let message = "Hello" + username;
    alert(message); //Returns Hello Bob when called
}

showMsg();
alert(username); //returns Bob

//Passing parameter
function showMessage(from,text)
{
    from = '*' + from + '*';
    alert(from + ':' + text);
}

let from = "Ann";
showMessage(from,"Hello");

//if text field is undefined
function msgr(from,text)
{
    text = text || "no text provided";
    //this ensures that if text is undefined, the first truthy value is provided
}

//Case of Empty return
function iempty() //Same case if only return is provided 
alert ( iempty() === undefined); //returns True

//Function Declaration and Function Expression
function sayHi()
{
    alert("Hello");
}
                            //Both of these are same
let sayHi = function()
{
    alert("Hello");  
};      //Function Expression has a semicolon in the end;

//Javascript considers the function to be stored as a variable

//A good example
function ask(question, yes, no)
{
    if(confirm(question))
        yes();
    else
        no();
}

ask(
    "How are you?",
    function(){alert("Woah");},
    function(){alert("Nahh");}
);

//Add two numbers
let adding = function(a,b)
{
    return a+b;
};

//Javascript first executes all the Function Declarations and then
//executes all others.
sayHi("John");
function sayHi(name)
{
    alert(`Hello, ${name}`);
}

//but this won't work with function expressions
let sayHi = function(name)
{
    alert(`Hello,${name}`);
};

//Declaration intended function 
let age = 16;
let welcome = (age<18)?
    function(){alert("Welcome");}:
    function(){alert("Yo");};

//Arrow Functions
let res = (a,b) => a+b;
let sayHell = () => alert("Woah");

