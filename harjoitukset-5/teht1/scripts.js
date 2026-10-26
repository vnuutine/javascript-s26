async function getHouses() {
    let response = await fetch("apartmentdata.json")
    let data = await response.json()
    return data.apartments
}

async function renderHouses() {
    let houses = await getHouses()
    console.log(houses);

    let housediv = document.getElementById("houses")

    houses.forEach(house => {        

        let housecontainer = document.createElement('div')
        housecontainer.className = 'houseContainer'

        let image = document.createElement('img')
        image.src = `images/${house.image}`
        image.className = 'houseImage'

        let header = document.createElement('p')
        header.className = 'header'
        header.innerHTML = house.address

        let size = document.createElement('p')
        size.className = 'size'
        size.innerHTML = `Koko: ${house.size} m²`

        let description = document.createElement('p')
        description.className = 'text'
        description.innerHTML = house.description

        let price = document.createElement('p')
        price.className = 'price'
        let numberstr = new Intl.NumberFormat('fi-FI').format(house.price)
        price.innerHTML = `Hinta: ${numberstr} €`

        housecontainer.appendChild(image)
        housecontainer.appendChild(header)
        housecontainer.appendChild(size)
        housecontainer.appendChild(description)
        housecontainer.appendChild(price)

        housediv.appendChild(housecontainer)
    }) 
}

renderHouses()