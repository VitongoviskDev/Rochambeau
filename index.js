function GetComputerChoice(){    
    switch(Math.floor(Math.random() * (4 - 1) + 1)){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }    
}
function GetPlayerChoice(){
    
    let validChoice = false;
    let invalid = "";
    while(!validChoice){
        let answer = prompt(invalid + " Choose your play (Rock/Paper/Scissors): ");
        switch(answer.toUpperCase()){
            case "ROCK":
            case "R":
                validChoice = true;
                return "ROCK";
            case "PAPER":
            case "P":
                validChoice = true;
                return "PAPER";
            case "SCISSOR":
            case "SCISSORS":
            case "S":
                validChoice = true;
                return "SCISSORS";
            default:
                invalid = "Opção inválida \n";
                break;
        }
    }
}
function Play(pc, player){

    let win = false;
    if(pc == player){
        return "Draw! Both player " + player;
    }
    else if(pc == "ROCK" && player == "PAPER")
        win = true;
    else if(pc == "PAPER" && player == "SCISSORS")
        win = true;
    else if(pc == "SCISSORS" && player == "ROCK")
        win = true;

    let winner = win ? player : pc;
    let loser = !win ? player : pc;

    return (`You ${win ? "WIN" : "LOSE"}! ${winner} beats ${loser}`);
}

function game(){
    let playAgain = false;
    do{
        alert(Play(GetComputerChoice(), GetPlayerChoice()));

        let invalid = "";
        let validChoice = false;

        while(!validChoice){
            let answer = prompt(invalid + "Play again (Y/N): ");
            switch(answer.toUpperCase()){
                case "Y":
                case "YES":
                    playAgain = true;
                    validChoice = true;
                case "N":
                case "NO":
                    playAgain = false;
                    validChoice = true;
                default:
                    invalid = "Opção inválida \n";
                    break;
            }
        }   
    }while(playAgain)
}