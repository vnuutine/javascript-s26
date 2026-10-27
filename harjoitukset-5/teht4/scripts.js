let allProducts = []

async function init() {
    allProducts = await getProducts()
    renderProducts(allProducts)

    let categories = await getCategories()
    for (let category of categories) {
        let option = document.createElement("option")
        option.value = category
        option.textContent = category
        document.getElementById("selectCtgr").appendChild(option)
    }
}

async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products/")
    let responseArray = await response.json()
    return responseArray
}

async function getCategories() {
    let response = await fetch("https://fakestoreapi.com/products/categories")
    let categories = await response.json()
    return categories
}

function renderProducts(list) {
    let proDiv = document.getElementById("products")
    proDiv.innerHTML = ""

    list.forEach(product => {
        let productDiv = document.createElement("div")
        productDiv.className = "productContainer"

        let title = document.createElement("p")
        title.textContent = product.title
        title.className = "title"

        let image = document.createElement("img")
        image.src = product.image
        image.className = "productImage"

        let description = document.createElement("p")
        description.textContent = product.description
        description.className = "description"

        let price = document.createElement("p")
        price.textContent = "Price: " + product.price + " €"
        price.className = "price"

        let category = document.createElement("p")
        category.textContent = product.category
        category.className = "category"

        let rating = document.createElement("p")
        rating.textContent = "Rating: " + product.rating.rate
        rating.className = "rating"

        productDiv.appendChild(title)
        productDiv.appendChild(image)
        productDiv.appendChild(description)
        productDiv.appendChild(price)
        productDiv.appendChild(category)
        productDiv.appendChild(rating)

        proDiv.appendChild(productDiv)
    })
}

init()

let selector = document.getElementById("selectCtgr")
selector.addEventListener("change", function () {
    let selectedCategory = selector.value
    if (selectedCategory === "all") {
        renderProducts(allProducts)
    } else {
        let filteredProducts = allProducts.filter(product => product.category === selectedCategory)
        renderProducts(filteredProducts)
    }
})
