//Falsy values
// "", null, undefined, NaN all become false
//Truthy value -> true
if("")
    alert("Hello"); //"" is falsy

if("0")
    alert("Hello"); //"0" is not falsy, only empty string is falsy

//Multiple ?
let msg = (age<3) ? 'Hi,baby' : (age<18)? 'Hello': (age<100)?'Woah':'Nvm';

//OR operator returns the first instance of true statement
//Short-Circuit Evaluation
let x;
true || (x=1); //True statement already reached, x not assigned.
alert(x); //returns false

//NOW,
let y;
false||(y=1); //as false is reached, then y is assined.
alert(y); //True

//AND operator returns the first FALSY value, else the last value if none are found
alert(1&&2&&3); //returns 3

alert(alert(1) || 2 || alert(3));
//Output is first 1, then 2
//alert(1) is undefined. But it gets executed first

//Break, discontinues the execution of the loop
//Continue goes to the next iteration

let user = {
    name: "John",
    age: 30,
}

user["likes bird"]=true;
//we can't use user.likes bird for this, it gives syntax error



