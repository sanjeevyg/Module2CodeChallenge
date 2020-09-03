const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

console.log(id)

fetch(`http://localhost:3000/powers/${id}`)
    .then(response => response.json())
    .then(power => render(power))

    const main = document.querySelector("#power-page")
function render(power) {
    const powerName = document.createElement("div")
    powerName.innerText = power.name

    const powerDescription = document.createElement("div")
    powerDescription.innerText = power.description
    main.append(powerName, powerDescription)
}