"use strict";

//*NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

//1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
//2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
//3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

window.addEventListener("load", start);

let basket = [];

async function start() {
  const products = await getProducts();
  console.log(products);

  addToBasket();

  document
    .querySelector("#filter-form")
    .addEventListener("change", () => checkboxAll(products));
}

async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

function ShowProducts(products) {
  document.querySelector("#products").innerHTML = "";
  for (const product of products) {
    const html = /*html*/ `<li> ${product.name} <button> tilføj </button>  </li>;`;
    document.querySelector("#products").insertAdjacentHTML("beforeend", html);
    document
      .querySelector("#products li:last-child button")
      .addEventListener("click", () => addToBasket(product));
  }
}

function addToBasket(product) {
  console.log("click");
  basket.push(product);
}

function checkboxAll(products) {
  const all = document.querySelector("#all");
  const product = document.querySelector("#products");

  if (all.checked) {
    ShowProducts(products);
  } else {
    product.innerHTML = "";
  }
}
