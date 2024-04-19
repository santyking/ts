let getSum = (num1:number,num2:number):number =>{
    return num1+num2;
}
let sum = getSum(4,2);
console.log(sum);

const car1  = {
    type: "sports",
    company : "Lamborghini",
    model : "Aventador"
}
console.log("Congratulations! you have a "+car1.company+" "+car1.model);

enum akasaLocations {
    Mumbai = 'Mumbai',
    Pune = 'Pune',
    Hyderabad = 'Hyderabad',
    Bengaluru = 'Bengaluru',
    Delhi = 'Delhi'
}
let currentLocation = akasaLocations.Mumbai;
console.log("Hey!, Welcome to "+currentLocation);

interface classDetails{
    id : number;
    name : string;
}

let student1:classDetails = {
    name:"Santosh",
    id:12
}
console.log(student1.name);
console.log(student1.id);

let salary:number = 646546.446546;
console.log(salary.toFixed(1));
console.log(salary.toFixed(2));
console.log(salary.toPrecision(1));

let students:string[] = ["Santosh","Akshay","Niranjan"];
console.log("Students: "+students);
console.log("Students: "+students[0]);

for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
}
students.push("Dattatray");
console.log(students);

students.pop();
console.log(students);

let Adder = (num1:number,num2:number,num3?:number):number =>{
    if (num3!== undefined) {
        return num1+num2+num3;
    }
    else{
        return num1+num2;
    }
}

console.log(Adder(5,4));
