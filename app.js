console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 //
let fav = 5;
let userGuess = prompt("Guess my favorite number");
if (userGuess < fav) {
  console.log("too low");
} else if (userGuess > fav) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

// Exercise 2 //
let birthMonth = window.prompt("What is your birth month?");
switch (birthMonth) {
  case "December":
  case "december":
  case "January":
  case "january":
  case "February":
  case "february":
    console.log("winter");
    break;
  case "March":
  case "march":
  case "April":
  case "april":
  case "May":
  case "may":
    console.log("Spring");
    break;
  case "June":
  case "june":
  case "July":
  case "july":
  case "August":
  case "august":
    console.log("Summer");
    break;
  case "September":
  case "september":
  case "October":
  case "october":
  case "November":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I meant on OUR calendar");
    break;
}

// Exercise 3 //

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BLU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
