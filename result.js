let win = sessionStorage.getItem("win");

function setUI(){
    const h1 = document.getElementById("finalResult");
    
    console.log(win);
    let status = '';
    if(win == true){
        status = 'WIN';
    }else{
        status = 'LOSE';
    }
    
    h1.innerHTML = `YOU ${status}`;
    console.log(status);
    h1.className = status;
}

setUI();

function RestartGame(){
    window.location.href = "./index.html";
}