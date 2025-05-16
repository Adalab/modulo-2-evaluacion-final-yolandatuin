'use strict';

//CONSTANTES Y VARIABLES
const productosCentro = document.querySelector(".js_productos-centro");

const botonBuscar = document.querySelector(".js_boton-buscar");
const inputBuscar = document.querySelector(".js_input-buscar");

let productos = [];

//FUNCIONES 
function pintarUnProducto(productosAPintar) {
  productosCentro.innerHTML += `
  <li>
        <div class="producto">
          <img class="imagen" src="${productosAPintar.image}" alt="">
          <p class="nombre-producto">${productosAPintar.title}</p>
          <p class="precio-producto">${productosAPintar.price} €</p>
          <button class="comprar">Comprar</button>
        </div>
  </li>`
}

function renderProductosCentrales(productosAPintar) {
productosCentro.innerHTML = '';
for (let producto of productosAPintar) {
  pintarUnProducto(producto); //Se pinta un solo producto. El parámetro tiene que ser un solo item del array. 
}};

//FUNCIONES MANEJADORAS
function handleClickBuscar(event){
  event.preventDefault();
  const valorBuscar = inputBuscar.value;
  const resultadosBusqueda = productos.filter(producto => producto.title.toLowerCase().includes(valorBuscar.toLowerCase())); //Resultado de la búsqueda 
  console.log(resultadosBusqueda);
  renderProductosCentrales(resultadosBusqueda);
};

function handleClickComprar(event){
  event.preventDefault();
  event.target.innerText = "Eliminar";
  event.target.classList.toggle('enCesta');

};


//EVENTOS


botonBuscar.addEventListener("click", handleClickBuscar);
productosCentro.addEventListener("click", handleClickComprar);

//FETCH
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    console.log("ya estaría");
  
  renderProductosCentrales(productos);
});