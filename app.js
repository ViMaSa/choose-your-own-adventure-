const prompt = require('prompt-sync')();
////////////////////////////////////////////////////////////////////////////////////////////////////
//  Functions
////////////////////////////////////////////////////////////////////////////////////////////////////
// Prints out itroduction
const introduction = () => {
  console.log("");
  console.log(`Welcome ${userName}...`);
  console.log("");
  console.log("The game is called: DON'T LOOK");
  console.log("It's simple.")
  console.log("You will have to look: \n[U]p \n[D]own \n[L]eft \n[R]ight");
  console.log("\n");
  console.log("It is a best of 3 rounds against the enemy. The enemy will point to one of these four directions.");
  console.log("If you look the same direction that the enemy chose, you lose the round.");
  console.log("If you avoid looking towards the direction the enemy chose, you win the round.");
  //console.log("Your goal is to beat 10 enemies while maintaining a positive record. (Win)-(Loss)");
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

const getDirection = () => {
  console.log("Which direction are you looking? \n [U]p \n [D]own \n [L]eft \n [R]ight");
  return prompt("Direction: ");
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
// const playerWins = 0;
// const playerLosses = 0;



////////////////////////////////////////////////////////////////////////////////////////////////////
//  Game Start
////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("What is your Name?");
const userName = prompt("Username: ");

introduction();

for(let i = 0; i < 3; i++){
  let choice = getDirection();

  printArrow(choice);

  console.log("\n");
}