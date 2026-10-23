//=======================================================================================
//  JavaScript Keywords and Identifiers Rules - IQ
//=======================================================================================
let validName = "starts with a letter"; // Valid identifier
// let 1invalidName = "Invalid Identifier"; // Invalid identifier (starts with a number)
// let invalid-Name = "Invalid Identifier"; // Invalid identifier (contains a hyphen)
// let invalid Name = "Invalid Identifier"; // Invalid identifier (contains a space)
// let var = "Invalid Identifier"; // Invalid identifier (reserved keyword)

let _private = "starts with an underscore"; // Valid identifier (starts with a letter and contains an underscore)
let $jQuery = "starts with a dollar sign"; // Valid identifier (starts with a letter and contains a dollar sign)
let item123 = "starts with a letter and contains numbers"; // Valid identifier (starts with a letter and contains numbers)  
let _temp2 = "starts with an underscore and contains numbers"; // Valid identifier (starts with an underscore and contains numbers) 
let $var123 = "starts with a dollar sign and contains numbers"; // Valid identifier (starts with a dollar sign and contains numbers)   
let a1_b2 = "starts with a letter, contains numbers and an underscore"; // Valid identifier (starts with a letter, contains numbers and an underscore)  

l//et 1stPlace = "Invalid Identifier"; // Invalid identifier (starts with a number)   
// let 2ndItem = "Invalid Identifier"; // Invalid identifier (starts with a number)    

//let function = "Invalid Identifier"; // Invalid identifier (reserved keyword)

let myVar = "uppercase M";
let myvar = "lowercase v"; // Valid identifier (case-sensitive, different from myVar)

let Café = "contains a non-ASCII character"; // Valid identifier (contains a non-ASCII character)
let 你 好 = "contains Chinese characters"; // Valid identifier (contains Chinese characters)
let \u0061 = "contains a Unicode escape sequence"; // Valid identifier (contains a Unicode escape sequence)
let \u{1F600} = "contains a Unicode code point"; // Valid identifier (contains a Unicode code point)

//let my-name = "Invalid Identifier"; // Invalid identifier (contains a hyphen)
//let my name = "Invalid Identifier"; // Invalid identifier (contains a space)
//let my@name = "Invalid Identifier"; // Invalid identifier (contains a special character)
//let my#name = "Invalid Identifier"; // Invalid identifier (contains a special character)
//let my!name = "Invalid Identifier"; // Invalid identifier (contains a special character)

//Camel Case (Standard for Js variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

//Pascal Case (Standard for Js Classes and React Components)
let UserProfile = "PascalCase";
let ShoppingCart = "ClassNameStyle";
function Person() { return "Constructor"; }

//Snake Case (Standard for Python variables and functions)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

//Screaming Snake Case (Standard for Constants)
const MAX_SIZE = 100;
//MAX_SIZE = 98; cannot reassign a constant variable
const API_KEY = "1234567890abcdef";
const DATABASE_URL = "https://example.com/database";
