'use strict'

const button = document.querySelector("button")

function popup(evt){
    alert('Button Clicked')
}

button.addEventListener('click', popup)