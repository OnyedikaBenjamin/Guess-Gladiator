'use strict';

let secretNumber=Math.trunc(Math.random() * 19) +1;
let matches =(secretNumber, userGuess)=>{return secretNumber===userGuess};
let highScore=document.querySelector('.highscore').textContent;
let score=document.querySelector('.score').textContent;

console.log(`The guesss number is ${secretNumber}`);


document.querySelector('.check').addEventListener(
    'click', function(){
        let userGuess=Number(document.querySelector('.guess').value);

        if(userGuess){
        matches(secretNumber, userGuess) ?
         (
            document.querySelector('.message').textContent='😎 Correct guess',
            document.querySelector('body').style.backgroundColor = 'green',
            document.querySelector('.number').textContent=secretNumber,
            score++,
            score > document.querySelector('.highscore').textContent ? document.querySelector('.highscore').textContent= document.querySelector('.score').textContent
            : ('')
        ) 
        : 
        userGuess>secretNumber ? document.querySelector('.message').textContent='👆 Guess is too high'
        : document.querySelector('.message').textContent= '👇 Guess is too low';
        if(score===0){
            document.querySelector('.message').textContent='😡 You lost the game'
        }
        else{
         score--,
         document.querySelector('.score').textContent=score
        }
        }

        else{
            document.querySelector('.message').textContent='⛔ Guess a number' 
        }
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
        document.querySelector('.message').textContent='Start guessing...',
            document.querySelector('body').style.backgroundColor = '#222',
            document.querySelector('.number').textContent='?'
            document.querySelector('.score').textContent=20;
            score=20,
            document.querySelector('.guess').value=''
    }
)