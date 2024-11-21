'use strict'

const form = document.querySelector("form")

form.addEventListener("submit", function (evt){
    event.preventDefault()

    const name1 = document.querySelector("input[name='firstname']").value
    const name2 = document.querySelector("input[name='lastname']").value

    document.getElementById("target").innerHTML = `Your name is ${name1} ${name2}`
})