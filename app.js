let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Computer-score");


//generate computer choice 
const genCompChoice = () => {
    const option = ["Stone", "Paper", "Scissor"];
    const randIdx = Math.floor( Math.random() * 3 );
    return option[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again !!!" ;
    msg.style.backgroundColor = "rgb(5, 60, 60)";
};
const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win !!! Your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost !!! ${compChoice} beats Your ${userchoice}` ;
        msg.style.backgroundColor = "Red";
    }
} 
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
        //generate comp choice
  const compChoice = genCompChoice();
      console.log("comp choice = ", compChoice);
    
      if(userchoice === compChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if(userchoice === "Stone") {
            //scissor, paper
            userWin = compChoice === "Paper" ? false : true;
        } else if(userchoice === "paper") {
            //stone, scissor
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            //Stone , paper
           userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
      }
};

 //using eventlistener to track our click event
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

