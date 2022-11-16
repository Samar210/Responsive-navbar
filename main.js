/*let job = "manager";
let salary = 0;

switch (job){
    case"manager":
        salary = 8000;
        console.log(salary)
    break;
    case "it" || "support":
        salary = 6000;
        console.log(salary)
    break;
    case "developer" || "designer":
        salary = 7000;
        console.log(salary)
    break;
    default:
        salary = 4000;
        console.log(salary)
    break;
}

let holidays = 0;
let money = 0;

if (holidays == 0){
    money = 5000;
    console.log (`My money is ${money}`);
}else if(holidays == 1 || holidays == 2){
    money = 3000;
    console.log (`My money is ${money}`);
}else if(holidays == 3){
    money = 2000;
    console.log (`My money is ${money}`);
}else{
    money = 1000;
    console.log (`My money is ${money}`);
}
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

my.pop()
my.pop()
console.log(my.reverse())

let one = my.reverse()
one.pop()
one.shift()
console.log(my.slice(zero, counter).reverse())

my.unshift("Elzero")
console.log(my[0])

console.log(my[1][4], my[1][5].toUpperCase())

for(let i = 0; i <= 10; i++){
    for(let g = 0;g <=10; g++ ){
        console.log(i, "*", g,"=", i*g)
    }
}
let products = ["keydoard", "Mouse", "Screen"]
let colors = ["Red", "Green", "Black"]

let showproducts = 2;
document.write(`<h1>Show ${showproducts} products </h1>`)
for(let i = 0; i <= showproducts; i++){
document.write(`<div>`)
document.write(`<h3> ${i + 1 } ${products[i]} </h3>`)
    for(let j = 0; j <= showproducts; j++){
document.write(`<p> ${colors[j]} </p>`)   
    }
document.write(`</div>`)

}
let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
let myemployee = ["Amgad", "Samah", "Amir", "Omar", "Othman", "Amany", "Samya"];
let num = 3;

document.write(`<div>We have x Admins</div>`)
document.write(`<div>We have ${num} Admins</div>`)
document.write(`<hr>`)

for(let i=0; i<num; i++){
    document.write(`<div>`)
    document.write(`<h1>The Admin of group ${i + 1} is ${myAdmins[i]}</h1>`)
    document.write(`<h2>Team members: </h2>`)
    for(let j = 0; j < 7; j++){
        if(myAdmins[i][0].toString() === myemployee[j][0].toString()){
            document.write(`<h4>${myemployee[j]}</h4>`)
        }
    }
    document.write(`<hr>`)
    document.write(`</div>`)

}


function showDetails(name="Unknown", age = "Unknown", status = true){
    console.log(`Hello ${name}, Your Age is ${age}`)
    if(status === true){
        console.log("You are available for Hire")
    }else{
        console.log("You are not available for Hire")
    }
}

showDetails("Sam", 21, true)

function sayHello(theName, theGender) {
    if(theGender === "Male"){
        theGender = "Mr";
    }else if(theGender === "Female"){
        theGender = "Miss";
    }else{
        theGender = "";
    }
    return `Hello ${theGender} ${theName}`;
}
console.log (sayHello("Sam"));


function calculate(firstNum, secondNum, operation) {
    let result = 0;
    if(secondNum === undefined){
        console.log("Second Number Not Found")
    }else{
        if(operation === "subtract"){
            result = firstNum - secondNum;
        }else if(operation === "multiply"){
            result = firstNum * secondNum;
        }else{
            result = firstNum + secondNum;
        }
        console.log(result)
    }
}
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

let Year = 12 ;
let Month = 30;
let day = 24;
let hour = 60;
let minute = 60;

function ageInTime(theAge) {
    if(theAge > 10 && theAge < 100){
        AgeInMonth = theAge * Year;
        AgeInDay = theAge * Year * Month
        AgeInHour = theAge * Year * Month * day 
        AgeInMinute = theAge * Year * Month * day * hour 
    }else{
        theAge = " Age Out Of Range";
    }
    console.log(AgeInMonth)
    console.log(AgeInDay)
    console.log(AgeInHour)
    console.log(AgeInMinute)

}
ageInTime(12)

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option> ${i} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2005)

function multiply(...Number){
    let result = 0;
    if(Number === String){
        
    }
}
function showDetails(a, b, c) {
let details = ["", "", ""];
let bool;
typeof a === "string"
    ? details.splice(0, 1, a)
    : typeof b === "string"
    ? details.splice(0, 1, b)
    : typeof c === "string"
    ? details.splice(0, 1, c)
    : "";
typeof a === "number"
    ? details.splice(1, 1, a)
    : typeof b === "number"
    ? details.splice(1, 1, b)
    : typeof c === "number"
    ? details.splice(1, 1, c)
    : "";
typeof a === "boolean"
    ? details.splice(2, 1, a)
    : typeof b === "boolean"
    ? details.splice(2, 1, b)
    : typeof c === "boolean"
    ? details.splice(2, 1, c)
    : "";
details[2] === true ? (bool = "Available") : (bool = "Not Available");
console.log(`Hello ${details[0]}, Your Age Is ${details[1]}, You Are ${bool} For Hire`);
}

showDetails(true, 38, "Osama");
*/

/*let names = (...name) => `String [${name}] => Done!`;

console.log(names("samar", "kerolos", "beshoy"));*/


/*function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live in ${zCountry[0, 1]}`
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {

    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY*/



/*let details = (zName) =>(status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    
console.log(details("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(details("Ahmed")("Not Available")()); // Iam Not Avaialble

var member = {
    name : "Elzero",
    age : 38,
    country : "Egypt",
    fulldetails : function(){
        return "My Name is , My age is "
    }
}
console.log(member.fulldetails())

var objMethodOne = Object.create({
    property : "test"
})

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
var objMethodTwo = Object.assign({
    property : "lddl"
})

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here


console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

console.log(objMethodFour.property); // "Method Four"

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign(a, threeNums, twoNums)
// Create Your Object Here in One Line

console.log(finalObject);
*/

/*let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames);
  
  for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ???????`);
    console.log(`The Publisher Is ???????`);
    console.log(`The Price Is ???????`);
  
    // Check If Nested Object Has Property (bestThree)
    if (???????) {
      console.log("- Game Has Releases");
      console.log(`First => ???????`);
      console.log(`Second => ???????`);
      console.log(`Third => ???????`);
    }
    console.log("#".repeat(20));
  }
  
  // Ouput
  
 /* "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"

let select = document.getElementById("elzero");
let select2 = document.getElementsByClassName("element");
let select3 = document.getElementsByName("js");
let select4 = document.getElementsByTagName("div");
let select5 = document.querySelector("#elzero");
let select6 = document.querySelector(".element");
let select7 = document.querySelector("div");
let select8 = document.querySelector('[name="js"]');
let select9 = document.querySelectorAll("#elzero");
let select10 = document.querySelectorAll(".element");
let select11 = document.querySelectorAll("div");
let select12 = document.querySelectorAll('name=["js"]');

console.log(select);
console.log(select2);
console.log(select3);
console.log(select4);
console.log(select5);
console.log(select6);
console.log(select7);
console.log(select8);
console.log(select9);
for(let i=1; i<=10; i++){
    let myImg = document.images[0].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    let myImgAlt = document.images[0].alt = "Elzero Logo";
    console.log(myImg);
}

function test(yes){
    if(yes==true){
        return "yes"
    }else if(yes==false){
        return "no"
    }else{
        return "Unknown"
    }
}
console.log(test(false))

let myPhoto = document.getElementsByTagName("img")[0];
for(let i=0; i<=4; i++){
    if(myPhoto.hasAttributes("alt")[i]){
        if(myPhoto.getAttribute("alt")[i] === ""){
            myPhoto.setAttribute("alt", "Elzero New")
        }else{
            myPhoto.setAttribute("alt", "Old")
        }
    }
}
console.log(myPhoto)

let type = document.querySelector("select");
let theResult = document.getElementsByClassName("results")[0];
let number = document.querySelector('[name="elements"]');
let text = document.querySelector('[name="texts"]');
document.forms[0].onsubmit = function (event) {
    event.preventDefault();
    let div = document.createElement("div");
    let section = document.createElement("section");
    let divText = document.createTextNode(text.value);
    let sectionText = document.createTextNode(text.value);
    div.setAttribute("class", "box");
    div.setAttribute("title", "Element");
    section.setAttribute("class", "box");
    section.setAttribute("title", "Element");
    div.appendChild(divText);
    section.appendChild(sectionText);
    if (type.value == "Div") {
        for (let i = 0; i < Number(number.value); i++) {
            div.setAttribute("id", id - "${ i + 1}");
            theResult.appendChild(div.cloneNode(true));
    }
    } else {
        for (let i = 0; i < Number(number.value); i++) {
            section.setAttribute("id", id - `${ i + 1}`);
            theResult.appendChild(section.cloneNode(true));
        }
    }
};
let element = document.querySelector("p")
element.onclick = function(){
    element.classList.remove()
}

let elements = [2,2.5,-4,5];
let sum = 0;
function Sumetion(){
    for (let i=0; i <= elements.length; i++){
        if(elements === []){
            return 0;
        }else{
            return sum += elements[i];
        }
    }
}
console.log(Sumetion())


let div = document.querySelector("div")

function clearDown(){
    div.innerHTML -=1;
    if(div.innerHTML === "5"){
        open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/","","width=500,height=500")
       
    }else if(div.innerHTML === "0"){
        clearInterval(counter)
    }
}
let counter = setInterval(clearDown,1000)



function oppositeNum(num){
    if(num>0){
        return -`${num}`
    }else if(num<0){
        return -`${num}`
    }else
    return "0";
}

console.log(oppositeNum(-5))
let myNumbers = [1, 2, 3, 4, 5];

let [a, , , ,e]=myNumbers
// Write Your Destructuring Assignment Here

console.log(a * e); // 5


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a,b,c,[d,e,[f,g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring

// Write Your Destructuring Assignment Here

//console.log(`My Best Friends: ${a}, ${b}, ${c}`);
console.log(arr)
// My Best Friends: Shady, Mahmoud, Ahmed

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  let memberAge = member.age;
  let memberWorking =member.working;
  let memberCountry = member.country;
  let memberHobbies = member.hobbies;
  let {memberAge : a, memberWorking:b, memberCountry:c} = member;  
  // Write Your Destructuring Assignment Here
  
  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${c}`);
  // I Live in Egypt
  
  //console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

class parent {
    #e;
    constructor(id, userName, email){
        this.i = id;
        this.u = userName;
        this.#e = email;
    }
}
class child extends parent{
    constructor(id, userName, email, salary){
        super(id, userName, email)
        this.s = salary;
    }
    write(){
        `${this.#e}iyuyuyjb`
    }
}
*/

let icon = document.querySelector("#icon");
let list = document.querySelector("#list")

icon.addEventListener('click', () => {
    list.classList.toggle('show');
  });
icon.mouseup = function () {
    list.classList.remove('show');
}
icon.addEventListener('click', () => {
    list.classList.toggle('hide');
  });
