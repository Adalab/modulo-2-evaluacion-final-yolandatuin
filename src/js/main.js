'use strict';

//CONSTANTES Y VARIABLES
const productosCentro = document.querySelector(".js_productos-centro");

const botonBuscar = document.querySelector(".js_boton-buscar");
const inputBuscar = document.querySelector(".js_input-buscar");

let productos = [];

//FUNCIONES 
function pintarUnProducto(producto) {
  productosCentro.innerHTML += `
  <li>
        <div class="producto">
          <img class="imagen" src="${producto.image}" alt="">
          <p class="nombre-producto">${producto.title}</p>
          <p class="precio-producto">${producto.price} €</p>
        </div>
  </li>`
}

function renderProductosCentrales() {
for (let producto of productos) {
  pintarUnProducto(producto);
}};

//FUNCIONES MANEJADORAS
function handleClick(event){
  alert("funciona");
}

//EVENTOS
botonBuscar.addEventListener("click", handleClick);

//FETCH
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    console.log("ya estaría");
  
  renderProductosCentrales();
});