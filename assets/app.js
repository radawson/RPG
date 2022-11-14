// Variables

let level = 1;
let health = 100;
let gold = 50;
let investory = [];

// * Query Selectors 

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const text2 = document.querySelector("#text2");
const levelText = document.querySelector("#lvlText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// * Weapons

const weapons = [
  {
    name: "Sword and Shield",
    power: 20
  },
  {
    name: "Battle Axe",
    power: 25
  },
  {
    name: "Mace",
    power: 15
  },
  {
    name: "Frost",
    power: 20
  },
  {
    name: "Fire Magic",
    power: 17
  },
  {
    name: "Dark Magic",
    power: 23
  },
  {
    name: "Dual Daggers",
    power: 16
  },
  {
    name: "Short Bow",
    power: 27
  },
  {
    name: "Blade of Poison",
    power: 18
  },
]

// * Locations

const locations = [
  {
    name: 'The Cave',
  },
  {
    name: 'The Old Bridge'
  },
  {
    name: 'The Twilight Forest'
  }
]

// * Monsters

const caveMonsters = [
  {
    name: 'Slime',
    health: 90,
    attack: 18,
    gold: 5,
    xp: 8
  },
  {
    name: 'Wolf',
    health: 100,
    attack: 21,
    gold: 8,
    xp: 10
  },
  {
    name: 'Goblin',
    health: 115,
    attack: 24,
    gold: 11,
    xp: 14
  },
]

const bridgeMonsters = [
  {
    name: 'Troll',
    health: 125,
    attack: 27,
    gold: 7,
    xp: 9
  },
  {
    name: 'Orc',
    health: 135,
    attack: 30,
    gold: 8,
    xp: 11
  },
  {
    name: 'Giant',
    health: 155,
    attack: 33,
    gold: 12,
    xp: 16
  },
]

const forestMonsters = [
  {
    name: 'Raven',
    health: 165,
    attack: 36,
    gold: 7,
    xp: 18
  },
  {
    name: 'Evil Pixie',
    health: 175,
    attack: 39,
    gold: 8,
    xp: 20
  },
  {
    name: 'Queen Spider',
    health: 200,
    attack: 42,
    gold: 12,
    xp: 25
  },
]

// Init Buttons

button1.onclick = warriorClass;
button2.onclick = mageClass;
button3.onclick = rogueClass;

// * Warrior Class Functions

function warriorClass() {
  text.innerText = 'Select your starting weapon.';
  button1.innerText = 'Sword and Shield';
  button2.innerText = 'Battle Axe';
  button3.innerText = 'Mace';
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
  text.innerText = 'Select your starting magic type.';
  button1.innerText = 'Frost Magic';
  button2.innerText = 'Fire Magic';
  button3.innerText = 'Dark Magic';
  text2.style.display = 'none';
  button1.onclick = frostMage;
  button2.onclick = fireMage;
  button3.onclick = darkMage;
}

function frostMage() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function fireMage() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

function darkMage() {
  text.innerText = 'Where would you like to explore first?'
  button1.innerText = 'The Cave'
  button2.innerText = 'The Old Bridge'
  button3.innerText = 'The Twilight Forest'
}

// ------------------------------------------------->

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

// ------------------------------------------------->
