

const userInput = document.getElementById("userInput");
const btnDisplay =  document.getElementsByClassName("btnDisplay");
const drinks = document.getElementsByClassName("drinks")
const toppings = document.getElementById("toppings");
const sizez = document.getElementById("sizes");
const textArea = document.getElementById("displayArea");


btnDisplay.addEventListener('click' , function() {
    //with text inputs , use object.
    for(let i = 0; i< drinks.length; i++){
        if(drinks[i].checked){
            alert(toppings[i].value)
            return;
        }

    }

    //textarea.value = user.input


   //Radi0 - Use return 
    for(let i = 0; i< toppings.length; i++){
        if(toppings[i].checked){
            alert
        }

    }
})