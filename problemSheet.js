//PART1
//a)
//Write an arrow function in JavaScript that returns ”Data Representation & Querying”.
//Assign the arrow function equal to a variable and get the function to output
//to the console
//arrow function(with value)
const PartA = () => {
    //console.log("Data Representation & Querying");
    return "Data Representation & Querying";
}
PartA();
console.log(PartA());
//b)
//Extend this arrow function that it now takes an argument and returns the passed
//variable. Assign the arrow function equal to a variable and get the function to
//output to the console
const PartB = (myValue) => {
    console.log(myValue);
}

PartB("Data Representation & Querying");
//c)
//Write an arrow function that takes two number and returns the sum of both numbers. 
//Assign the arrow function equal to a variable and get the function to output
//to the console.
const PartC = (num1, num2) => {
    num1 = 2;
    num2 = 3;
    sum = num1 + num2
    //return num1 + num2;
    //  console.log(sum);
}
//console.log(PartC(2,4))
PartC();
//d)
//Write a function that multiply each number under 70 by 2 in the following array.
//Hint: use a .map function
//const ages = [25, 31, 42, 77];
// const PartD = (num1, num2, num3)=>{
//     //using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//     const array = [25, 31, 42, 77];
//     // Pass a function to map
//     if(x<70){
//         const map = array.map(((x) => x * 2));
//     }
//     else{
//         const map = array.map(((x) => x));
//     }
//     //const map = array.map(((x) => x * 2));

//     console.log(map);
// }
// //console.log(test)
// PartD();

//his solution
const array = [25, 31, 42, 77];
//creating new array with values x*2
let PartD = array.map((item) => {
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }
});

console.log(PartD);

//PART2
//a)
//Create an array of strings
const array2 = ["Joe", "Suzie", "Lin", "Jack"];

console.log(array2);
//b)Create an addTask function:
// i. It receives a string as a parameter called task.
// ii. It adds the task to the array.
// iii. It prints a message in the console indicating the insertion.
// iv. It returns the number of elements in the array after the insertion.
let MyTasks = [];

let addTask = (task) => {
    //MyTasks.push(task);
    let length = MyTasks.push(task); //TO RETURN LENGTH
    console.log("Task: " + task + " was added to Tasks!");
    console.log("Number of elements in the array: " + length);
    return length;
}
//c) Create a listAllTasks function:
// i. It iterates over all the tasks in the array.
// ii. It prints each array item in the console.
let listAllItem = () => {
    MyTasks.forEach((item) => {
        console.log(item);
    })
}
//d) Create a deleteTask function:
// i. It receives a string as a parameter called task.
// ii. It removes that string from the array.
// iii. It prints in console a message indicating the deletion.
// iv. It returns the number of elements in the array after the deletion.
let deleteTask = (task) => {
    //looking for the position of the item
    let index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
        console.log("Task: " + task + " has been removed from the array.");
    } else {
        console.log("Task: " + task + " was not found in Tasks!");
    }
    return MyTasks.length;
}

//b)
addTask("Learn JS!");
//c)
addTask("Learn React!");
//d)
listAllItem();
deleteTask("Learn JS!");
deleteTask("test!");