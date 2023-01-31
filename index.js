let comp_score=0;
let user_score=0;
let choices_obj={
    'rock' : 
    {
        'rock':'draw',
        'paper' : 'lose',
        'scissor':'win'
    },
    'paper' : 
    {
        'rock':'win',
        'paper' : 'draw',
        'scissor':'lose'
    },
    'scissor' : 
    {
        'rock':'lose',
        'paper' : 'win',
        'scissor':'draw'
    }
};

function checker(input)
{
    var choices =['rock','paper','scissors'];
    var num=Math.floor(Math.random()*3);
    document.getElementById("comp_choice").innerHTML=`Computer choose  ${choices[num]} `;
    document.getElementById("user_choice").innerHTML=`User choose  ${input} `;
    

    switch(choices_obj[input][choices[num]])
    {
        case 'win' : document.getElementById("result").innerHTML="You Win";
        user_score++;break;
        case 'lose' : document.getElementById("result").innerHTML="You Lose";
        comp_score++;break;
        default : document.getElementById("result").innerHTML="DRAW";break;
    }
    document.getElementById("computer_score").innerHTML=comp_score;
    document.getElementById("user_score").innerHTML=user_score;

}