import { ListaJuegos } from "./apps.js";

const BuscarJuegos=document.getElementById("BuscarJuegos")
const cadena= document.getElementById("cadenaTexto");

const buscadorJuegosNavbar = () => {
    if (ListaJuegos.length > 0) {
      let juegosFiltrados=[] 
      juegosFiltrados= ListaJuegos.filter( juego => juego.nombre.toLowerCase().includes(cadena.value.toLowerCase()))
      juegosFiltrados.map((juego)=>mostrarResultados(juego))  
    } else {
      console.log("No hay Juegos");
    }
  };


  const mostrarResultados = (juego) => {
    const main = document.querySelector('divResultados');
    console.log(juego.nombre)
    main.innerHTML+=`
      <h3 class="text-light">${juego.nombre}</h3>
    `
  };

  BuscarJuegos.addEventListener("submit", buscadorJuegosNavbar);