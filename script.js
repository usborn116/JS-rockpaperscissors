function computerPlay(){
    let x = Math.floor(Math.random()*10);
    return (x < 3) ? "rock" : (x > 7) ? "paper" : "scissors";
}


function letsplay(playerSelection, computerSelection){
    console.log(`You: ${playerSelection}; Computer: ${computerSelection}`);
    if (playerSelection == computerSelection){
        return "This round is tied!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            return "L! Paper beats rock."
        } else {
            return "W! Rock beats scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock"){
            return "W! Paper beats rock."
        } else {
            return "L! Scissors beats paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            return "L! Rock beats scissors."
        } else {
            return "W! Scissors beats paper"
        }
    } else {
        return "not a valid character!"
    }
}

function game(){
    let user = 0;
    let comp = 0;
    for (let i=0; i<5; i++){
        const playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            const computerSelection = computerPlay();
            let winner = letsplay(playerSelection,computerSelection);
            if (winner[0] == "W"){
                user ++;
            } else if (winner[0] == "L"){
                comp++;
            } else {
                console.log("Tie!")
            }
            console.log(`You: ${user}, Computer: ${comp}`);
        } else {
            alert ("Not valid! Game is reset.");
            game();
        };
    };
  return (user>comp) ? `You won the game! Final score--You: ${user}; Computer: ${comp}` : (user<comp) ? `You lost the game. Final score--Computer: ${comp}; You: ${user}`: `Game is tied! Final score--Computer: ${comp}; You: ${user}`
}