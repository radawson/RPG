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
const text2 = document.querySelector("#text2");
const levelText = document.querySelector("#lvlText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// Init Buttons

button1.onclick = warriorClass;
button2.onclick = mageClass;
button3.onclick = rogueClass;

// * Class Functions


// * Warrior Class Functions 
function warriorClass() {
  text.innerText = 'Select your starting weapon.';
  button1.innerText = 'Sword and Shield';
  button2.innerText = 'Battle Axe';
  button3.innerText = 'Dual Daggers';
  text2.style.display = 'none';
  button1.onclick = swordShield;
  button2.onclick = battleAxe;
  button3.onclick = oneHandMace;
}

function swordShield() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function battleAxe() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function oneHandMace() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}
// ------------------------------------------------->


// * Mage Class Functions
function mageClass() {
  // ! I need to build out a class for Mage still. 
  // ! Button does not work.
}

// * Rogue Class Functions

function rogueClass() {
  text.innerText = 'Select your starting weapon.';
  button1.innerText = 'Dual Daggers';
  button2.innerText = 'Short Bow';
  button3.innerText = 'Blade of Poison';
  text2.style.display = 'none';
  button1.onclick = dualDaggers;
  button2.onclick = shortBow;
  button3.onclick = poisonBlade;
}


function dualDaggers() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function shortBow() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function poisonBlade() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}
