// This function takes a user's input for a game of rock, paper, scissors.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("TypeError: User's choice not defined");
  }
};

//console.log(getUserChoice('rock'))

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "You Won!";
  }
  if (computerChoice === userChoice) {
    return "Game is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won!";
    } else {
      return "You Won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won!";
    } else {
      return "You Won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won!";
    } else {
      return "You Won!";
    }
  }
}

///console.log(determineWinner('paper', 'paper'))

const playGame = () => {
  const userChoice = getUserChoice("bomb"); //This is the line where the user makes their choice
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();