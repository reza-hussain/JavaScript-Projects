const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const percentage = document.querySelector(".percentage");
const plusMinus = document.querySelector('.plusMinus');
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

clear = function () {
  previous.textContent = "";
  current.value = "";
};

// Plus Minus Function

plusMinusFunc = function () {
  if (Number(current.value) < 0) {
    current.value = Number(current.value) * -1;
  } else {
    current.value = Number(current.value) * -1;
  }
};

plusMinus.addEventListener('click', function(){
    plusMinusFunc();
})

//Clear Button (AC)

clearButton.addEventListener("click", function () {
  clear();
});

//Number Inputs
for (let i = 0, num; (num = numberButtons[i]); i++) {
  num.addEventListener("click", function () {
    let temp = num.value.toString();
    current.value += temp;
  });
}

//Operation Inputs
for (let j = 0, opn; (opn = operationButtons[j]); j++) {
    opn.addEventListener("click", function () {
      let tmp = opn.value.toString();
      current.value += tmp;
    });
}

//Equals button

equals = function(){
    if(current.value.includes('%')){
        let strArr = current.value.split('%');
        previous.innerHTML = (strArr[1]/100)*strArr[0];
        current.value = '';
    }

    else if(current.value != ''){
    current.value = current.value;
    previous.innerHTML = eval(current.value);
    current.value = '';
    }
}

equalsButton.addEventListener('click', function(){
    equals();
});

//Percentage Button

percentage.addEventListener('click', function(){
    current.value+='%';
});