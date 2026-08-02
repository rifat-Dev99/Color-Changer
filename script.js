console.log("Write JavaScript")

let blue = document.querySelector(".blue")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let purple = document.querySelector(".purple")
let pink = document.querySelector(".pink")

let color = document.querySelector(".color")
let round = document.querySelector(".round")
let h3 = document.querySelector(".h3")
let random = document.querySelector(".random")
let hastag = document.querySelector(".hastag")
let colorCode = document.querySelector("#colorCode")
let copyBtn = document.querySelector(".copyBtn")


function borderNone() {
    blue.style.border = "none"
    red.style.border = "none"
    green.style.border = "none"
    yellow.style.border = "none"
    pink.style.border = "none"
    purple.style.border = "none"
}


function ChangeColor(colorr, code) {
    colorr.addEventListener("click", () => {
        borderNone()
        colorr.style.border = "3px solid black"
        color.style.backgroundColor = `${code}`;
        h3.textContent = `${code}`
        hastag.textContent = `${code}`
    })
}

ChangeColor(blue, '#536ef1')
ChangeColor(red, '#fc5754')
ChangeColor(green, '#49c885')
ChangeColor(yellow, '#f9c64c')
ChangeColor(purple, '#9a66e0')
ChangeColor(pink, '#e24aa7')


//Random color Genarate
let hexChar = "0123456789ABCDEF";

function RandomColor() {
    let clor = "#"
    for (let i = 0; i < 6; i++) {

        clor += hexChar[Math.floor(Math.random() * 16)]
    }
    return clor;
}

random.addEventListener("click", () => {
    const clor = RandomColor()
    console.log(clor)
    borderNone()
    color.style.backgroundColor = `${clor}`;
    h3.textContent = `${clor}`
    hastag.textContent = `${clor}`
})


// Event lisner for copy button
copyBtn.addEventListener("click", () => {

    console.log("CpoyBtn clicked")
    navigator.clipboard.writeText(colorCode.innerText);

    copyBtn.innerText = "Copied! ✅"

    setTimeout(() => {
        copyBtn.innerText = "Copy"
    }, 2000)
})





















