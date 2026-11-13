let resultsArr = []
let selectedIndex = -1

const resultsUl = document.getElementById("results")

async function fetchNames() {
    try {
        const response = await fetch("names.json")
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

function renderNames() {
    resultsUl.replaceChildren()

    resultsArr.forEach((name, i) => {
        const nameLi = document.createElement("li")
        nameLi.textContent = name

        if (i === selectedIndex) {
            nameLi.classList.add("activeName")
        }

        resultsUl.appendChild(nameLi)
    })
}

async function init() {
    const names = await fetchNames()
    resultsArr = names
    renderNames()
}

addEventListener("keyup", (event) => {
    init()
 })