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

let multiplier = (num1:number,num2:number,num3:number = 4):number => {
    return num1*num2*num3;
}
console.log(multiplier(5,1));

let myDept:string = "IT";
switch (myDept) {
    case "IT":
        console.log("You belong to IT Department");
        break;

    case "HR":
        console.log("You belong to HR Department");
        break;

    case "Finance":
        console.log("You belong to Finance Department");
        break;

    default:
        console.log("Invalid Department Selected");
        break;
}

interface Area {
    length:number,
    breadth:number
}

const a1:Area = {
    length:10,
    breadth:10
}

class studentDetails {
    private firstName:string;
    private lastName:string;
    public constructor(fName:string,lName:string) {
        this.firstName = fName;
        this.lastName = lName;
    }
    public getFullName():string{
        return this.firstName+" "+this.lastName;
    }
}
let student2 = new studentDetails("Santosh","Mhatre");
console.log(student2.getFullName());
 