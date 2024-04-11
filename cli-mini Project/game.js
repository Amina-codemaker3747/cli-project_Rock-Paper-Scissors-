import inquirer from 'inquirer';
// Enum representing the possible choices
var Choice;
(function (Choice) {
    Choice["Stone"] = "Stone";
    Choice["Paper"] = "Paper";
    Choice["Scissors"] = "Scissors";
})(Choice || (Choice = {}));
// Function to generate computer's choice
function generateCompChoice() {
    const choices = [Choice.Stone, Choice.Paper, Choice.Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Function to determine the winner
function Winner(playerChoice, computerChoice) {
    if ((playerChoice === Choice.Stone && computerChoice === Choice.Scissors) ||
        (playerChoice === Choice.Paper && computerChoice === Choice.Stone) ||
        (playerChoice === Choice.Scissors && computerChoice === Choice.Paper)) {
        return 'You win!';
    }
    else if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else {
        return 'Computer wins!';
    }
}
// Main game function
async function playGame() {
    const { userChoice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Choose your move:',
            choices: Object.values(Choice)
        }
    ]);
    const computerChoice = generateCompChoice();
    console.log(`Computer chose: ${computerChoice}`);
    const result = Winner(userChoice, computerChoice);
    console.log(result);
}
// Start the game
playGame();
