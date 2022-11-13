// Variables

let level = 1;
let health = 100;
let gold = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let investory = ['stick'];

// * Query Selectors 

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const levelText = document.querySelector("#lvlText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// Init Buttons

button1.onclick = lookAround;
button2.onclick = goTown;
button3.onclick = goForrest;

// * Functions

function lookAround() {
  button1.innerText = "Grab the stick";
  button2.innerText = "Go to town";
  // button3.innerText = "test";
  text.innerText = 'You look around and find a stick near you. There is also a narrow path leading to town.'
};

function goTown() {
  button1.innerText = "Go to Store";
  button2.innerText = "Go into Forrest";
  // button3.innerText = "test";
  text.innerText = 'You entered the town. You see a sign that says "Store".'
};

function goForrest() {
  button1.innerText = "Attack the bear";
  button2.innerText = "Run away";
  // button3.innerText = "test";
  text.innerText = 'You hear a bear, but you can\'t see it'
};


// ! Button 3 is below
// function test() {
//   console.log('Testing button');
// };