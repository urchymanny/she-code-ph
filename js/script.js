// Variables

let x = 5;
var y = 6;
const z = 0;

z = x + y;

console.log("The value of x is: ", x);
console.log("The value of y is: ", y);
console.log("The value of z is: ", z);
// x is the variable and 5 is the value

// Data Types
// 1. numbers
number_variable = 0.123;

// 2. Strings
username = "Uchenna";
console.log("The value of username is: ", username);

// 3. Booleans
has_username = true; // or false

//4. Null
total_value = null;

// 5. Undefined
// console.log(password);

// 6. Lists(Arrays)
first_names = ["Uchenna", "Mba", "Matt", 1, "Uchenna"];

// 7. Objects
user = {
  first_name: "Uchenna",
  last_name: "Mba",
  dob: 120039488923,
  username: "uche",
};

// Functions

function adder(first_num, second_num) {
  result = first_num + second_num;
  return result;
}

const adder = (first_num, second_num) => {
  result = first_num + second_num;
  return result;
};

a = 20;
b = 25;

c = adder(a, b);
console.log("The result is:", c);
alert("Hurray");
