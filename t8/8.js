'use strict'

const button = document.querySelector("#start")
let result

function display(evt){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const op = document.getElementById("operation").value
    if (op === "add"){
        result = (num1 + num2)
    } else if (op === "sub"){
        result = num1 - num2
    } else if (op === "multi"){
        result = num1 * num2
    } else {
        result = num1 / num2
    }
    document.getElementById("result").innerHTML = result
}

button.addEventListener('click', display)