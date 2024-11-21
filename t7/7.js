'use strict'

const img = document.querySelector("img")
const p = document.querySelector("#trigger")

p.addEventListener("mouseover", ()=>{
    img.src = "img/picB.jpg"
})

p.addEventListener("mouseout", () =>{
    img.src = "img/picA.jpg"
})