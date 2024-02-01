let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");  // It will take every div.choice tag as a Node List.
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#User-Score");
const compscore=document.querySelector("#Comp-Score");

//User choice with choiceID
choices.forEach((ele)=>{                             // For each will traverse the Node List // ele is just a parameter.
    ele.addEventListener("click",()=>{
        const userChoice=ele.getAttribute("id");
        gamePlay(userChoice);    
    });
});
      
//Computer Choice
const CompChoice= ()=>{
        const option=["Rock","Paper","Scissors"];
        const randomIndex=Math.floor(Math.random()*3);      //Used for Genrating Random Number B/w 0 to 2.
        return option[randomIndex];
}

//Draw Msg Print Funtion
const drawMsg= ()=>{
    msg.style.backgroundColor="darkblue";
    console.log("Draw Game");
    msg.innerText="Game Draw. Try Again!";
}

//Msg Printing Funtion
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        msg.style.backgroundColor="green";
        console.log("You Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        msg.style.backgroundColor="red";
        console.log("You Lose");
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
    }
}

// Game Play Code
const gamePlay= (userChoice)=>
{
    console.log("User Choice:",userChoice);
    const compChoice=CompChoice();
    console.log("Computer Choice:",compChoice);

    //GamePlay Comparison

    if(userChoice===compChoice)
    {
        drawMsg();
    }
    else{                               // Else condition will execute if there is no draw
        let userWin=true;               // Initaillt userWin is Setted to be true now we will comapre it with compChoice
        if(userChoice=="Rock")
        {
            userWin= compChoice==="Paper" ? false : true;  /*If User Choses Rock then Computer has two choices:if Comp 
                                                           Chooses Paper userWin will be false and if chooses scissors userWin will remain true.*/
        }
        else if(userChoice=="Paper")
        {
            userWin= compChoice ==="Scissors" ? false : true;
        }
        else
        {
            userWin= compChoice ==="Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
