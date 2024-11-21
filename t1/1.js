'use strict'

const list = ["First item", "Second item", "Third item"]
const target = document.querySelector("#target")

list.forEach(item => {
    target.innerHTML += `<li>${item}</li>`
})


