let boxes = document.querySelectorAll(".box");
let x = true;
let winner =document.querySelector(".winner_display");
let newGame = document.querySelector('.New_game');
let resetGame = document.querySelector('.Reset_game');

let ele = Array.from(boxes);
ele.forEach((btn) =>{
    btn.addEventListener("click",btnclick); 
    function btnclick(){ 
        if(x){
            btn.innerText = 'X';
            x = false;
            btn.disabled = true;
            btn.classList.add("textcolor1");
            btn.classList.remove("textcolor2")
            
        }else{
            btn.innerText = 'O';
            x = true;
            btn.disabled = true;
            btn.classList.add("textcolor2");
            btn.classList.remove("textcolor1")
        }
        CheckingWinner();
        Checkdraw();
    }
    newGame.onclick= restart;
    resetGame.onclick= restart;
    function restart() {
        ele.forEach((btn)=>{
           btn.innerText = "";
           btn.disabled = false;
           x=true;
           winner.style.display = 'none';

           btn.classList.remove("winner_pattern_bg");
        })
    } 
})
let winpatern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Function for Checkig winner

function CheckingWinner(){
    for(let ptr of winpatern){
        let val1= boxes[ptr[0]].innerText;
        let val2= boxes[ptr[1]].innerText;
        let val3= boxes[ptr[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                winner.innerText = `${val1} wins, Congrats!`;

                ele.forEach((box)=>{
                    box.disabled = true;
                })

                winner.style.display = 'block';

                boxes[ptr[0]].classList.add("winner_pattern_bg");
                boxes[ptr[1]].classList.add("winner_pattern_bg");
                boxes[ptr[2]].classList.add("winner_pattern_bg");
            }
        }
    }
}

// function for checking draw
function Checkdraw(){
    let winnerExists = false;
    for(let a of winpatern){
        let c1 =  boxes[a[0]].innerText;
        let c2 =  boxes[a[1]].innerText;
        let c3 =  boxes[a[2]].innerText;
        if(c1 != "" && c2 != "" && c3 != ""){ 
        if (c1 == c2 && c2 == c3){
            winnerExists = true;
        }
        } 
    }   
    if(!winnerExists){
        let allFilled = true;
        for(let box of boxes){
        if(box.innerText == ""){
                allFilled = false;
                break;
            }
        }
        if(allFilled){
            winner.innerText = `The Match is Draw, Play again!`;   
            winner.style.display = 'block';          
        }  
    } 
}