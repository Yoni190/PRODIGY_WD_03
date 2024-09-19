let blocks = document.querySelectorAll(".block");
let isPlayer1 = true;

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
        
    });
})
