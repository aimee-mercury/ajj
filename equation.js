let x1;
let x2;
let delta;
let a =  Number(prompt("Enter value of a: "));
let b =  Number(prompt("Enter value of b: "));
let c =  Number(prompt("Enter value of c: "));
delta = b*b - 4*a*c;
alert("Value of delta is: "+delta);
x1 = (-b+Math.sqrt(delta))/(2*a);
alert ("value of x1 is: "+x1);
x2 = (-b-Math.sqrt(delta))/(2*a);

alert("value of x2 is: "+ x2)