'use strict'

const list = ["First item", "Second item", "Third item"]
const ul = document.createElement("ul")

list.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    ul.appendChild(li)
})

document.getElementById("target").appendChild(ul)