async function getFacts() {
    let response = await fetch("https://api.chucknorris.io/jokes/random")
    let data = await response.json()
    return data.value
}

async function renderFacts() {
    let fact = await getFacts()
    console.log(fact)

    let factP = document.getElementById("facts")
    factP.innerHTML = fact
}

let factButton = document.getElementById("getFact")
factButton.addEventListener("click", renderFacts)
