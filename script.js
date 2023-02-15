const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', game));

const resetbutton = document.querySelector('.reset')
resetbutton.addEventListener('click', reset)

let results = document.querySelector('.results');
let score = document.querySelector('.score');

let user = 0;
let comp = 0;

function reset (){
    results.textContent = ''
    score.textContent = ''
    user = 0
    comp = 0
}

function checkwinner(){
    if (user == 5 || comp  == 5 ){
        let x = (user>comp) ? `\r\nYou won!` : (user<comp) ? `You lost :(`: `It's a tie!`;
        results.textContent += `${x} Click the "Start Over" button to begin a new game.`;
    }
}

function game (){
    const playerSelection = this.getAttribute('id');
    const computerSelection = computerPlay();
    if (user == 5 || comp  == 5 ){
        let x = (user>comp) ? `\r\nYou won!` : (user<comp) ? `You lost </3`: `It's a tie!`;
        let y = 'Click the "Start Over" button to begin a new game.'
        results.textContent = x+' '+y;
    } else {
        results.textContent = ''
        let winner = letsplay(playerSelection,computerSelection);
        if (winner[0] == "W"){
            user ++;
            score.textContent = `\r\nYou: ${user}, Computer: ${comp}\n`;
            checkwinner();
        } else if (winner[0] == "L"){
            comp++;
            score.textContent = `\r\nYou: ${user}, Computer: ${comp}\n`
            checkwinner();
        } else {
            score.textContent = `\r\nYou: ${user}, Computer: ${comp}\n`
            checkwinner();
        } ;
    };
};


function computerPlay(){
    let x = Math.floor(Math.random()*10);
    return (x < 4) ? "rock" : (x > 7) ? "paper" : "scissors";
}


function letsplay(playerSelection, computerSelection){
    results.textContent += `\r\nYou chose: ${playerSelection}; Computer chose: ${computerSelection}. `;
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
            results.textContent += "\r\nL! Scissors beats paper.\n"
            return "L! Scissors beats paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            results.textContent += "\r\nL! Rock beats scissors.\n"
            return "L! Rock beats scissors." 
        } else {
            results.textContent += "\r\nW! Scissors beats paper.\n"
            return "W! Scissors beats paper"
        }
    } else {
        return "not a valid character!"
    }
}