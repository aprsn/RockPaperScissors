let person = 0;
let computer;

let movements = ["Rock", "Paper", "Scissors"];
const wins = [
  { m1: 0, m2: 2 },
  { m1: 1, m2: 0 },
  { m1: 2, m2: 1 },
];

function chooseMovement(value) {
  const element = document.querySelector(".person");
  element.innerHTML = movements[value];

  person = +value;
}

function playGame() {
  const randomSelect = Math.floor(Math.random() * 3);

  document.querySelector(".computer").innerHTML = movements[randomSelect];

  computer = +randomSelect;

  document.querySelector(".result").innerHTML = resultDecider(); 
}

function resultDecider() {
  if (person == computer) {
    return "Scoreless.";
  }

  const findMovement = wins.filter((x) => x.m1 === person); 

  if (findMovement[0].m2 === computer) {
    return "You Win!";
  }

  return "You Lost.";
}
