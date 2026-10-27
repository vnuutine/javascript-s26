async function getPrice() {
    let response = await fetch("https://api.coinbase.com/v2/prices/BTC-EUR/spot")
    let responseJson = await response.json()
    return responseJson.data.amount
}

async function renderPrice() {
    let price = await getPrice()
    console.log(price)

    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    let date = day + "." + month + "." + year

    let cleanedPrice = parseFloat(price).toFixed(2)

    let priceP = document.getElementById("results")
    priceP.innerHTML = date + ": " + cleanedPrice + " €"
}

let button = document.getElementById("getButton")
button.addEventListener("click", renderPrice)