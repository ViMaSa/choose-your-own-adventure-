const prompt = require('prompt-sync')();
////////////////////////////////////////////////////////////////////////////////////////////////////
//  Functions
////////////////////////////////////////////////////////////////////////////////////////////////////
// Prints out itroduction
const gameIntroduction = () => {
  console.log("");
  console.log("The game is called: DON'T LOOK");
  console.log("It's simple.")
  console.log("You will have to look: \n[U]p \n[D]own \n[L]eft \n[R]ight");
  console.log("\n");
  console.log("It is a best of 3 rounds against the enemy. The enemy will point to one of these four directions.");
  console.log("If you look the same direction that the enemy chose, you lose the round.");
  console.log("If you avoid looking towards the direction the enemy chose, you win the round.");
  console.log("Let's Begin!");
  console.log("\n");
}

// Prints picture of a direction
const printArrow = (direction) => {
  const dir = direction.toUpperCase();
  console.log();

  if(dir === "U") {
    console.log(pictureUp);
  } else if (dir === "D") {
    console.log(pictureDown);
  } else if (dir === "L") {
    console.log(pictureLeft);
  } else if (dir === "R") {
    console.log(pictureRight);
  } else {
    console.log(noPicture);
  }
}

// Promps the user for a direction to look
const getDirection = () => {
  console.log("Which direction are you looking? [U]p [D]own [L]eft [R]ight");
  let choice = prompt("Direction: ");
  return choice.toUpperCase();
}

// Random decision enemy chooses
const enemyDecisionMaking = () => {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// Determines the winner based on choices
const determineRoundWinner = (pChoice, eChoice) => {
  if(eChoice === pChoice) {
    playerLosses++;
  } else {
    playerWins++;
  }
}

// Gambling game to defeat the enemy
const gamblingGame = () => {
  gameIntroduction();

  for(let i = 0; i < 3; i++){
    console.log(`ROUND ${i}`);
    console.log("=======================================================");
    let playerChoice = getDirection();
    let enemyChoice = enemyDecisionMaking();

    console.log("");
    console.log(`You chose ${playerChoice} and enemy chose ${enemyChoice}`);
    printArrow(playerChoice);
    printArrow(enemyChoice);

    determineRoundWinner(playerChoice, enemyChoice);

    console.log(`Record: ${playerWins}W - ${playerLosses}L`)
    console.log("\n");
  }

  if(playerWins > playerLosses) {
    console.log("You beat the enemy! Here is some money...");
    playerMoney += 10;
    console.log(`Money Total: ${playerMoney}`);
  }
}
/*******************************
**  Pictures of Arrows
*******************************/
const pictureRight = "__\\\n--/";
const pictureLeft = "/__\n\\--";
const pictureUp = "/\\\n||";
const pictureDown = "||\n\\/";
const noPicture = "\\/\n/\\";

/*******************************
**  Variables
*******************************/
let playerWins = 0;
let playerLosses = 0;
let playerMoney = 0;
const gameChoices = ["U", "D", "R", "L"];

////////////////////////////////////////////////////////////////////////////////////////////////////
//  Game Start
////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("What is your Name?");
const userName = prompt("Username: ");

console.log("");
console.log(`Welcome ${userName}...`);
gamblingGame();
