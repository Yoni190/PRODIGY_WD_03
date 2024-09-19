let blocks = document.querySelectorAll(".block");
let board = document.querySelector(".board");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let scoreBoard = document.querySelector(".score")
let array = [];
let score1 = 0;
let score2 = 0;
let player1 = null;
let player2 = null;

let isPlayer1 = true;

function getNames(){
    player1 = prompt("Player1's name: ")
    player2 = prompt("Player2's name: ")

    addPlayers(player1, player2);
}

function addPlayers(player1, player2){
    const p1 = document.createTextNode(`${player1} : ${score1}`);
    const p2 = document.createTextNode(`${player2} : ${score2}`);

    scoreBoard.appendChild(p1);
    scoreBoard.appendChild(document.createElement("br"));
    scoreBoard.appendChild(p2);
}

function incrementScore(){
    scoreBoard.textContent = "";
    const p1 = document.createTextNode(`${player1} : ${score1}`);
    const p2 = document.createTextNode(`${player2} : ${score2}`);

    scoreBoard.appendChild(p1);
    scoreBoard.appendChild(document.createElement("br"));
    scoreBoard.appendChild(p2);
}

function createBlocks() {
    size = 9;
    for(let i = 0; i < size; i++){
        const block = document.createElement("div");
        block.className = "block";
        block.style.border = "2px solid black";
        block.style.height = "100px";
        block.style.width = "100px";
        block.style.fontSize = "90px";
        block.style.textAlign = "center";
        if (i > 5){
            third.appendChild(block);
        }
        else if (i > 2){
            second.appendChild(block);
        }
        else {
            first.appendChild(block);
        }
        array.push(block);
        block.onclick = () => chooseSquare(block);
        
    }
}

function clearBoard(){
    array = [];
    first.textContent = ""
    second.textContent = ""
    third.textContent = ""
}

function chooseSquare(block){
    if (isPlayer1){
        block.textContent = "X";
        isPlayer1 = false;
    }
    else if(!isPlayer1 && block.textContent == "") {
        block.textContent = "O";
        isPlayer1 = true;
    }
    if (isWin()) {
        alert("You won!")
    }
    if (isTie()){
        alert("It's a tie!")
        clearBoard();
        createBlocks();
    }
    
}

function isWin(){
    if (
        array[0].textContent == "O" && array[1].textContent == "O" && array[2].textContent == "O" ||
        array[3].textContent == "O" && array[4].textContent == "O" && array[5].textContent == "O" ||

        array[6].textContent == "O" && array[7].textContent == "O" && array[8].textContent == "O" ||
        array[0].textContent == "O" && array[3].textContent == "O" && array[6].textContent == "O" ||
         
        array[1].textContent == "O" && array[4].textContent == "O" && array[7].textContent == "O" ||
        array[2].textContent == "O" && array[5].textContent == "O" && array[8].textContent == "O" ||
         
        array[0].textContent == "O" && array[4].textContent == "O" && array[8].textContent == "O" ||
        array[2].textContent == "O" && array[4].textContent == "O" && array[6].textContent == "O" 
        
    ){
        score2++;
        incrementScore();
        clearBoard();
        createBlocks();
        return true; 
        
    }
    else if (array[0].textContent == "X" && array[1].textContent == "X" && array[2].textContent == "X" ||
             array[3].textContent == "X" && array[4].textContent == "X" && array[5].textContent == "X" ||

             array[6].textContent == "X" && array[7].textContent == "X" && array[8].textContent == "X" ||
             array[0].textContent == "X" && array[3].textContent == "X" && array[6].textContent == "X" ||

             array[1].textContent == "X" && array[4].textContent == "X" && array[7].textContent == "X" ||
             array[2].textContent == "X" && array[5].textContent == "X" && array[8].textContent == "X" ||

             array[0].textContent == "X" && array[4].textContent == "X" && array[8].textContent == "X" ||
             array[2].textContent == "X" && array[4].textContent == "X" && array[6].textContent == "X" 
        ) {
        score1++;
        incrementScore();
        clearBoard();
        createBlocks();
        return true;
        
        }

}

function isTie(){
    tieArray = array.map((block) => {
        if (block.textContent != "")
            return true;
    });
    return tieArray.every((value) => value);
}

getNames();
createBlocks();