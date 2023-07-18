// Calculator JavaScript code

// Constants

const inputFieldEl = document.querySelector("#result");
const buttonsEl = document.querySelectorAll("button")

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
        const buttonVal = buttonsEl[i].textContent;
        if(buttonVal == "C"){
            clearInput();
        }
        else if(buttonVal == "="){
            calculator();
        }
        else{
            result(buttonVal);
        }
    })
}

function clearInput(){
    inputFieldEl.value = "";
}
function calculator(){
    inputFieldEl.value = eval(inputFieldEl.value);
}
function result(val){
    inputFieldEl.value = inputFieldEl.value + val;
}