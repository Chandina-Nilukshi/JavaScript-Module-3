'use strict'

const input = document.getElementById("calculation")
const button = document.getElementById(("start"))


let result



function final(evt){
    const nums = input.value

    if(nums.includes("+")){
    const [num1, num2] = nums.split("+").map(Number)
    result = num1 + num2
} else if (nums.includes("-")){
    const [num1, num2] = nums.split("-").map(Number)
    result = num1 - num2
} else if(nums.includes("*")){
    const [num1, num2] = nums.split("*").map(Number)
    result = num1 * num2
} else {
    const [num1, num2] = nums.split("/").map(Number)
    result = num1 / num2
}
    document.getElementById("result").innerHTML = result
}

button.addEventListener('click', final)