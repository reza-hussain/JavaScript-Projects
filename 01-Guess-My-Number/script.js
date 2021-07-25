
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
document.querySelector('.score').textContent = score;
// Putting secret number value into the hidden class
/*document.querySelector('.hidden').textContent = secretNumber;*/

function wrongAnswer() {
    document.querySelector('body').style.backgroundColor = "#343a40";
    document.querySelector('.container').style.backgroundColor = "#343a40";
    document.querySelector('.container').style.boxShadow = "20px 20px 60px #2c3136, -20px -20px 60px #3c434a";
    document.querySelector('.text-shadow').style.textShadow = "3px 3px 6px #2c3136, -3px -3px 6px #3c434a";
    document.querySelector('.number').style.textShadow = "3px 3px 6px #2c3136, -3px -3px 6px #3c434a";
    document.querySelector('.score').textContent = score--;
}

function correctAnswer(){
    document.querySelector('body').style.backgroundColor = "#ffc107";
    document.querySelector('.container').style.backgroundColor = "#ffc107";
    document.querySelector('.container').style.boxShadow = "20px 20px 60px #d9a406, -20px -20px 60px #ffde08";
    document.querySelector('.text-shadow').style.textShadow = "3px 3px 6px #d9a406, -3px -3px 6px #ffde08";
    document.querySelector('.number').style.textShadow = "3px 3px 6px #d9a406, -3px -3px 6px #ffde08";
}

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}
// Making the check class read the value of the input box and creating a var guess 
// which will later be used in if statements to compare
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.number').value);


//when there is no input
if(!guess){
    displayMessage("No Number ⛔!");
}

else if(guess === secretNumber){
    displayMessage("Correct Number 🔥!");
    document.querySelector('.score').textContent = ++score;
    correctAnswer();
    secretNumber = Math.trunc(Math.random()*20)+1;
    /*document.querySelector('.hidden').textContent = secretNumber;*/

    
    
}

else if(guess !== secretNumber){
   if(score > 1){
    displayMessage(guess > secretNumber ? "Too high!!" : "Too Low!!")
    wrongAnswer();
    document.querySelector('.score').textContent = score;
   }

   else{
       displayMessage("You Lose !!");
       wrongAnswer();
   }
}


})