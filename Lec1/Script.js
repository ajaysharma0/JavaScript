fullNmae="Tontstark";
age=23;
price=99.99;
radius=14;
a=null;
//y=undefined;
isFollow=true;
console.log(isFollow);


let x;
let y=null;

let z=BigInt("125");
let l=Symbol("Hello!");
console.log(typeof(l));

//object
const student={
    name:"Ajay",
    age:23,
    isPass:true
};
console.log(student);
console.log(student["name"]);
console.log(student.age);

//if we want to increase age number of student 
student["age"]=student["age"]+1;
console.log(student.age);


student.age=student.age+2;
console.log(student.age);
