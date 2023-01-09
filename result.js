let win = sessionStorage.getItem("win");

function setUI(){
    const h1 = document.getElementById("finalResult");
    console.log(h1);
    h1.innerHTML = `YOU ${win ? "WIN" : "LOSE"}`;
    h1.className = win ? "WIN" : "LOSE";
}

setUI();

function RestartGame(){
    window.location.href = "./index.html";
}