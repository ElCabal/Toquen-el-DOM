/* document.querySelector nos selecciona el primer elemento que coincida con lo que estamos poniendo entre ( )*/

let navbar = document.querySelector(".navbar");
let navbarList = document.querySelector(".navbar__list");

/* document.getElementById nos selecciona un elemento del documento por medio del valor del atributo id que se le haya asignado. */

let menuButton = document.getElementById("menu");
/* 
 Le agregamos a la variable (menuButton) un escuchador de eventos (addEventListener) que va a escuchar eventos de tipo click y una vez escuche el click, va a ejecutar la funcion openMenu */
menuButton.addEventListener("click", openMenu);

/* Aquí declaramos la función openMenu con function
posterior a eso usamos classList en nuestras variables  para acceder acceder a la lista de clases de los elementos osea de navbar y navbarList , seguido del toggle  nos sirve para quitar o añadir una clase extra*/
function openMenu() {
  navbar.classList.toggle("active");
  navbarList.classList.toggle("active");
}
