const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

fetch(`http://localhost:3000/heroines/${id}`)
    .then(response => response.json())
    .then(heroine => render(heroine))


const main = document.querySelector("#heroine-page")
function render(heroine) {
    
    const heroineName = document.createElement("div")
    heroineName.innerText = heroine.name

    const heroineSuperName = document.createElement("div")
    heroineSuperName.innerText = heroine.super_name

    const powerName = document.createElement("div")
    powerName.innerHTML = `<a href="power.html?id=${heroine.power.id}">${heroine.power.name}</a>`
   

    main.append(heroineName, heroineSuperName, powerName)
}

