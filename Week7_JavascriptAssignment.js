// Question 1
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

/*Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!*/

console.log("Question 1, part a", ages[ages.length -1] - ages[0]);

//add a new age to the array and repeat the last console.log.
ages.push(83);
console.log("Question 1, part b", ages[ages.length -1] - ages[0]);

//us a loop to iterate through the array and calculate the average age.
let sum = 0
for( let i=0; i < (ages.length); i++) {
    (sum += ages[i]);
    
}
console.log("Question 1, part c",(sum) / (ages.length));

//Question 2
//create an array called names 

const names = ['Sam','Tommy','Tim','Sally','Buck','Bob']

//make a loop to calculate the average number of letters per name.
//part a:
let letters = 0
let numPeople = names.length

for(i = 0; i < names.length; i++){
   letters += (names[i].length);
}

console.log ("Question 2, part a ",(letters / numPeople))

//part b: use a loop to iterate the array and concatenate all the names together and separate with spaces.
let sentenceString = ""
for(i = 0; i < names.length; i++) {
    sentenceString += names[i] + " ";
}
console.log("Question 2, part b ",sentenceString)

//access the last element of the array by calling on the array and then specifying the index number (array length -1)

console.log("3) access the last element ",names[names.length -1]);

//now the first element
console.log("4) access the first element ", names[0]);

//Question 5: new array and write a loop to fill it with the number of characters per element from the first array.

const nameLengths = []
let characters = 0
for(i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);    
}
console.log("5) New array of element character count ", nameLengths);

//Question 6: sum all the elements of the new array

let sumElements = 0
for(i = 0; i < names.length; i++) {
    sumElements += nameLengths[i];
}
console.log("6) ",sumElements);

//Question 7: create a two parameter function and concatenate to itself

function repeatIt(word, x){
    let statement = "";
    for(i = 0; i < x; i++){
        statement += word;
    }
    return statement
}

console.log("7) ",repeatIt("Howdy!",3));
console.log(repeatIt("WHAT?!",2));

//Queston 8: create a full name from two parameters.

function fullName(firstName, lastName){
    return firstName + " " + lastName
}
console.log("8) ",fullName("Inna", "Ovsiannakova"))
console.log(fullName("Robyn", "Johnstone"))

//Question 9: Write a boolean for the sum of an array being greater than 100.
const warriors = [15,45,23,41,67]
const womenAndChildren = [5,20,10,8,12]

function weAreSparta(numbers) {
        const readyForWar = numbers.reduce((acc, num) => acc + num, 0);
        return readyForWar > 100;
}

console.log("9) ",weAreSparta(warriors));
console.log(weAreSparta(womenAndChildren));

//Question 10: return the average of all the elements in an array.

function averageNum(array) {
    const arrayTotal = array.reduce((acc, num) => acc + num, 0);
    return arrayTotal / array.length;
}

console.log("10) ",averageNum(warriors));
console.log(averageNum(womenAndChildren));
console.log(averageNum(nameLengths));

//Question 11: function using two arrays of numbers and returns if Array1 averages > Array2 averages

function comparisons(array1, array2){
    return (array1.reduce((acc, num) => acc + num, 0)) > (array2.reduce((acc, num) => acc + num, 0));
}

console.log("11) ",comparisons(warriors, womenAndChildren));
console.log(comparisons(nameLengths, warriors));

//Question 12: boolean function about buying drinks at the beach :)

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true
    } else {return false}
}

console.log("12) ",willBuyDrink(false, 15.00));
console.log(willBuyDrink(true, 9.00));
console.log(willBuyDrink(true, 15.00));

//Question 13: write my own function!
console.log("13)")
const family =[
    {
        name: 'Kiersey',
        age: 12,
        healthStatus: 'Not sick'
    },
    {
        name: 'Brennan',
        age: 11,
        healthStatus: 'sick'
    },
    {
        name: 'Kali',
        age: 38,
        healthStatus: 'Not sick'
    }
];

function rinseYourDish(people) {
    let dishMessages = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 8) {
            dishMessages.push(people[i].name);
        } 
    }

    return dishMessages + " rinse your dish.";
}
console.log(rinseYourDish(family))

function sickOrNot(people) {
    let dayMessages = [];
    

    for (let i = 0; i < people.length; i++) {
        if (people[i].healthStatus !== 'sick') {
            dayMessages.push(people[i].name);
        } else {
           console.log("Feel better soon, " + (people[i].name));
        }
    }

    return "Have a great day, " + dayMessages; 
}

console.log(sickOrNot(family))