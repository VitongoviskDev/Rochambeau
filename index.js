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

let round = 1;
let wins = 0;
let loses = 0;
let winStatus = 'LOSE';



function Play(player){

    let pc = GetComputerChoice();

    console.log('player: ' + player);
    console.log('pc: ' + pc);

    if( pc == "ROCK" && player == "PAPER" ||
        pc == "PAPER" && player == "SCISSORS" ||
        pc == "SCISSORS" && player == "ROCK"){
            
            winStatus = 'WIN';
        wins ++;
        winner = player;
        loser = pc;
        console.log(winStatus)
            
    }else if(player == pc){
        winStatus = 'DRAW';
        console.log(winStatus)
    }else{
        winStatus = 'LOSE';
        loses ++;
        winner = pc;
        loser = player;
        console.log(winStatus)
    }
    
    console.log('PLAY ', winStatus)
    round ++;

    UpdateUi(winStatus, player, pc);

    if(wins == 5 || loses == 5){
        GameOverUi(winStatus);
    }
}

function UpdateUi(winStatus, player, machine){
    
    console.log('UpdateUi ',winStatus)
    const playerImage = document.getElementById("playerImage");
    const machineImage = document.querySelector("#machineImage");

    switch(player){
        case 'ROCK':
            playerImage.src = "./images/rock.png"
            break;
        case 'PAPER':
            playerImage.src = "images/paper.png"
            break;
        case 'SCISSORS':
            playerImage.src = "images/scissors.png"
            break;
    }

    switch(machine){
        case 'ROCK':
            machineImage.src = "./images/rock.png"
            break;
        case 'PAPER':
            machineImage.src = "images/paper.png"
            break;
        case 'SCISSORS':
            machineImage.src = "images/scissors.png"
            break;
    }



    let text = "";
    if(winStatus == 'DRAW'){
        text = `Round ${round}:  <span id='draw'><strong>DRAW!</strong></span> both played ${player}`;
    }
    else{ 
        let win = winStatus == 'WIN';
        text = `Round ${round}: You <span id='${win ? 'win' : 'lose'}'><strong>${win ? "WIN" : "LOSE"}!</strong></span> ${win ? player : machine} beats ${!win ? player : machine}`;
    }

    const p = document.querySelector("#result");
    p.innerHTML = text;

    const playerE = document.querySelector("#player");
    const machineE = document.querySelector("#machine");

    playerE.textContent = wins;
    machineE.textContent = loses;

}

function GameOverUi(winStatus){
    
    console.log("go to result");
    console.log(winStatus);
    win = winStatus == 'WIN';
    localStorage.win = JSON.stringify(win);

    window.location.href = "./result.html";
}
function RestartGame(){
    const p = document.querySelector("#result");
    const playerE = document.querySelector("#player");
    const machineE = document.querySelector("#machine");
    const playerImage = document.getElementById("playerImage");
    const machineImage = document.querySelector("#machineImage");

    round = 1;
    wins = 0;
    loses = 0;


    playerE.textContent = '0';
    machineE.textContent = '0';
    p.textContent = `Round ${round}:`;
    playerImage.src = "images/question.png";
    machineImage.src = "images/question.png";
    console.log("teste");
}
RestartGame();