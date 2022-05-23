const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

let results = document.querySelector('.results');
results.textContent = ''
results.setAttribute('style', 'white-space: pre;')

let user = 0;
let comp = 0;

function game (){
    const playerSelection = this.getAttribute('class');
    const computerSelection = computerPlay();
    if (user == 5 || comp  == 5 ){
        let x = (user>comp) ? `\r\nYou won the game! Final score--You: ${user}; Computer: ${comp}` : (user<comp) ? `You lost the game. Final score--Computer: ${comp}; You: ${user}`: `Game is tied! Final score--Computer: ${comp}; You: ${user}`;
        results.textContent += (x);
    } else {
        let winner = letsplay(playerSelection,computerSelection);
        if (winner[0] == "W"){
            user ++;
            results.textContent += `\r\nYou: ${user}, Computer: ${comp}\n`;
        } else if (winner[0] == "L"){
            comp++;
            results.textContent += `\r\nYou: ${user}, Computer: ${comp}\n`;
        } else {
        results.textContent += `\r\nYou: ${user}, Computer: ${comp}\n`;
        } ;
    };
};


function computerPlay(){
    let x = Math.floor(Math.random()*10);
    return (x < 3) ? "rock" : (x > 7) ? "paper" : "scissors";
}


function letsplay(playerSelection, computerSelection){
    results.textContent += `\r\nYou: ${playerSelection}; Computer: ${computerSelection}\n`;
    if (playerSelection == computerSelection){
        results.textContent += "This round is tied!\n"
        return "\r\nThis round is tied!/n"
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            results.textContent += "\r\nL! Paper beats rock.\n"
            return "L! Paper beats rock."
        } else {
            results.textContent += "\r\nW! Rock beats scissors\n"
            return "W! Rock beats scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock"){
            results.textContent += "\r\nW! Paper beats rock.\n"
            return "W! Paper beats rock."
        } else {
            results.textContent += "\r\nL! Scissors beats paper\n"
            return "L! Scissors beats paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            results.textContent += "\r\nL! Rock beats scissors.\n"
            return "L! Rock beats scissors." 
        } else {
            results.textContent += "\r\nW! Scissors beats paper\n"
            return "W! Scissors beats paper"
        }
    } else {
        return "not a valid character!"
    }
}