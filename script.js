let blocks = document.querySelectorAll(".block");
let board = document.querySelector(".board");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let array = [];

let isPlayer1 = true;

function createBlocks() {
    size = 9;
    for(let i = 0; i < size; i++){
        const block = document.createElement("div");
        block.className = "block";
        block.style.border = "2px solid black";
        block.style.height = "100px";
        block.style.width = "100px";
        block.style.fontSize = "90px";
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
    }
}

blocks.forEach((block) => {
    block.addEventListener("click", () => {
        if (isPlayer1 && block.textContent == ""){
            block.textContent = "X";
            isPlayer1 = false;
        }
        else if(!isPlayer1 && block.textContent == "") {
            block.textContent = "O";
            isPlayer1 = true;
        }
        if (
            (one.textContent === "X" && two.textContent === "X" && three.textContent === "X") ||
            (one.textContent === "O" && two.textContent === "O" && three.textContent === "O")
        ) {
                alert("You won!");
            }
            
        
        
    });
})

createBlocks();