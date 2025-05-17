'use strict';

//CONSTANTES Y VARIABLES
const productosCentro = document.querySelector(".js_productos-centro");
const productosCesta = document.querySelector(".js_productos-cesta");

const botonBuscar = document.querySelector(".js_boton-buscar");
const inputBuscar = document.querySelector(".js_input-buscar");

let productos = [];
let listadoCesta = [];

//FUNCIONES 
function pintarUnProducto(UnProductoAPintar, lugarDondePintar ) {
  lugarDondePintar.innerHTML += `
  <li id="${UnProductoAPintar.id}">
        <div class="producto">
          <img class="imagen" src="${UnProductoAPintar.image}" alt="">
          <p class="nombre-producto">${UnProductoAPintar.title}</p>
          <p class="precio-producto">${UnProductoAPintar.price} €</p>
          <button class="comprar js_comprar" id="${UnProductoAPintar.id}">Comprar</button>
        </div>
  </li>`
};

function renderProductos(productosAPintar, lugarDondePintar) {
lugarDondePintar.innerHTML = '';
for (let producto of productosAPintar) {
  pintarUnProducto(producto, lugarDondePintar); //Se pinta un solo producto. El parámetro tiene que ser un solo item del array. 
}};


//FUNCIONES MANEJADORAS
function handleClickBuscar(event){
  event.preventDefault();
  const valorBuscar = inputBuscar.value;
  const resultadosBusqueda = productos.filter(producto => producto.title.toLowerCase().includes(valorBuscar.toLowerCase())); //Resultado de la búsqueda 
  console.log(resultadosBusqueda);
  renderProductos(resultadosBusqueda, productosCentro);
};

function handleClickComprar(event){  
  event.preventDefault();

  if (event.target.tagName === "BUTTON" ) {
      event.target.innerText = "Eliminar";
      event.target.classList.toggle('enCesta');

      const clickedId = event.currentTarget.id;
      
      const clickedProductObjt = productos.find((producto) => producto.id === event.target.id);
      console.log(clickedProductObjt);
};






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
  
  renderProductos(productos, productosCentro);
  renderProductos(listadoCesta, productosCesta);
});