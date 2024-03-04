// let userScore = 0;
// let compScore = 0;
// let roundsPlayed = 0;
// const maxRounds = 5; // Set the maximum number of rounds

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#Computer-score");

// // Function to reset the game for a new round
// const resetGame = () => {
//     userScore = 0;
//     compScore = 0;
//     roundsPlayed = 0;
//     userScorePara.innerText = "0";
//     compScorePara.innerText = "0";
// };

// // Function to update the overall result and reset for the next round
// const updateOverallResult = () => {
//     let userWins = 0;
//     let compWins = 0;

//     if (userScore > compScore) {
//         userWins++;
//     } else if (userScore < compScore) {
//         compWins++;
//     }

//     if (roundsPlayed === maxRounds) {
//         if (userWins > compWins) {
//             msg.innerText = `You won ${userWins} out of ${maxRounds} rounds!`;
//             msg.style.backgroundColor = "Green";
//         } else if (userWins < compWins) {
//             msg.innerText = `Computer won ${compWins} out of ${maxRounds} rounds!`;
//             msg.style.backgroundColor = "Red";
//         } else {
//             msg.innerText = `It's a draw! Both you and the computer won ${userWins} rounds out of ${maxRounds} rounds.`;
//             msg.style.backgroundColor = "rgb(5, 60, 60)";
//         }

//         // Reset for the next round
//         resetGame();
//        } else {
//         msg.innerText = `Round ${roundsPlayed + 1} - User: ${userScore}, Computer: ${compScore}`;
//         msg.style.backgroundColor = "rgb(5, 60, 60)";
//     }
// };

// // Function to handle the end of a round
// const endRound = () => {
//     roundsPlayed++;
//     if (roundsPlayed === maxRounds) {
//         // If maximum rounds are played, show overall result
//         updateOverallResult();
//     } else {
//         // Otherwise, continue to the next round
//         msg.innerText = `Round ${roundsPlayed + 1} - Play your move`;
//         msg.style.backgroundColor = "rgb(5, 60, 60)";
//     }
// };

// //generate computer choice 
// const genCompChoice = () => {
//     const option = ["Stone", "Paper", "Scissor"];
//     const randIdx = Math.floor( Math.random() * 3 );
//     return option[randIdx];
// }
// const drawGame = () => {
//     msg.innerText = "Game was Draw, Play Again !!!" ;
//     msg.style.backgroundColor = "rgb(5, 60, 60)";
// };
// const showWinner = (userWin, userchoice, compChoice) => {
//     if(userWin) {
//         userScore++;
//         userScorePara.innerText = userScore;
//         msg.innerText = `You Win !!! Your ${userchoice} beats ${compChoice}` ;
//         msg.style.backgroundColor = "Green";
//     } else {
//         compScore++;
//         compScorePara.innerText = compScore;
//         msg.innerText = `You Lost !!! ${compChoice} beats Your ${userchoice}` ;
//         msg.style.backgroundColor = "Red";
//     }
// } 
// const playGame = (userchoice) => {
//     console.log("user choice = ", userchoice);
//         //generate comp choice
//   const compChoice = genCompChoice();
//       console.log("comp choice = ", compChoice);
    
//       if(userchoice === compChoice) {
//         //Draw Game
//         drawGame();
//       } else {
//         let userWin = true;
//         if(userchoice === "Stone") {
//             //scissor, paper
//             userWin = compChoice === "Paper" ? false : true;
//         } else if(userchoice === "paper") {
//             //stone, scissor
//             userWin = compChoice === "Scissor" ? false : true;
//         } else {
//             //Stone , paper
//            userWin = compChoice === "Stone" ? false : true;
//         }
//         showWinner(userWin, userchoice, compChoice);
//       }

//         // Check if the current round has ended
//         if (roundsPlayed < maxRounds) {
//             endRound();
//             updateOverallResult();
//         }
//     };
//     choices.forEach((choice) => {
//         choice.addEventListener("click", () => {
//             const userchoice = choice.getAttribute("id");
//             playGame(userchoice);
//         });
//     });


//  //using eventlistener to track our click event
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userchoice = choice.getAttribute("id");
//         playGame(userchoice);
//     });
// });

// // Event listener for choices
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userchoice = choice.getAttribute("id");
//         playGame(userchoice);

//         // Check if the current round has ended
//         if (roundsPlayed < maxRounds) {
//             endRound();
//         }
//     });
// });

