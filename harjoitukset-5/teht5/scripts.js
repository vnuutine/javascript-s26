let resultsArr = []
let selectedIndex = -1

const resultsUl = document.getElementById("results")
const searchInput = document.getElementById("search")

async function fetchNames() {
    try {
        const response = await fetch("names.json")
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

// Render the names in the results list
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

// Filters the names based on the search field input and updates the results list
async function searchNames() {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === "") {
        clearResults()
        return
    }

    const names = await fetchNames()
    resultsArr = names.filter((name) =>
        name.toLowerCase().startsWith(searchTerm)
    )
    selectedIndex = -1
    renderNames()
}

function clearResults() {
    resultsArr = []
    selectedIndex = -1
    resultsUl.replaceChildren()
}

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        clearResults()
        searchInput.value = ""
        return
    } 

    if (event.key === "ArrowDown") {
        if (selectedIndex < resultsArr.length - 1) {
            selectedIndex++
            renderNames()
        }
        return
    } 

    if (event.key === "ArrowUp") {
        if (selectedIndex > 0) {
            selectedIndex--
            renderNames()
        }
        return
    } 

    if (event.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < resultsArr.length) {
            searchInput.value = resultsArr[selectedIndex]
        } else {
            searchInput.value = ""
        }
        clearResults()
        return
    }
    
    searchNames()
 })
