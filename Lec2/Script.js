//Arthmetic operators 
let a=5;
let b=2;
// console.log("a+b=",a+b);
// console.log("a-b",a-b);

//unary
// console.log(a++);
// console.log(a);

//comparision operator
let x=5; //number
let y=5;
// console.log(x==y);
// console.log(x!=y);

let z="5"; //String
console.log(x==z);
//Note:-In javaScript when a variable store string it implicite conver string into number and the compare

let k=6;
let l=5;
console.log("!(6<5)",!(6===5));

//conditioonal statement

let age=23;
if(age>=18){
    console.log("you can vote");
}

//Example
let color;
let mode="dark";

if(mode==="dark"){
    color="blak";
}

if(mode==="light"){
    color="white";
}

//if-else
let humanAge=14;
if(humanAge >= 18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}

//Odd Even
let num=20;
if(num%2==0){
    console.log("Even");
}
else{
    console.log("odd");
}

//prompt

//let fullName=prompt();
//console.log(fullName);


let number=prompt("Hey Champ!");
if(number%5===0){
    console.log("yes it is");
}else{
    console.log("Moye Moye");
}

//Question practice

let score=75;
let grade;

if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else{
    grade="F";
}
console.log(grade);








