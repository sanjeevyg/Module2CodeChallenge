fetch("http://localhost:3000/heroines")
    .then(response => response.json())
    .then(heroines => handle(heroines))

function handle(heroines) {
    heroines.map(heroine => render(heroine))
}

const main = document.querySelector("#heroine-list")
function render(heroine) {
    const heroineName = document.createElement("div")
    heroineName.innerHTML = `<a href="heroine_show.html?id=${heroine.id}">${heroine.name} </a>`
    main.appendChild(heroineName)
}

const searchParams = new URLSearchParams(window.location.search)
const search = searchParams.get("search")

baseURL = "http://localhost:3000";
heroineURL = `${baseURL}/heroines`;

if (search) {
  heroineURL = `${heroineURL}?search=${search}`;
}