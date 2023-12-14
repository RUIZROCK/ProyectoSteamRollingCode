import { ListaJuegos } from "./apps.js";

const formularioAdministrarJuego = document.querySelector("#formularioAdministrarJuego");

const nombre = document.getElementById("nombre"),
      requisitos = document.getElementById("requisitos"),
      desarrollador = document.getElementById("desarrollador"),
      categoria = document.getElementById("categoria"),
      precio = document.getElementById("precio"),
      detalles = document.getElementById("detalles"),
      img = document.getElementById("img")
const 
modalJuego = new bootstrap.Modal (document.getElementById("modalJuego")),
btnCargar=document.getElementById("btnCargar"),
btnEditar=document.getElementById("btnEditar"),
btnVerMas=document.getElementById("btnVerMas"),
btnBorrar=document.getElementById("btnBorrar")

const crearJuego = (e) => {
    e.preventDefault();
    const juegoNuevo = new Juego(
      undefined,
      nombre.value,
      requisitos.value,
      desarrollador.value,
      categoria.value,
      precio.value,
      detalles.value,
      img.value,
      []
    );
  
    ListaJuegos.push(juegoNuevo);
    guardarEnLocalStorage();
    crearFila(juegoNuevo, ListaJuegos.length);
  };

const MostrarModalJuegoAdministracion=()=>{
    modalJuego.show();
}

const guardarEnLocalStorage = () => {
    localStorage.setItem("lista", JSON.stringify(ListaJuegos));
  };

  guardarEnLocalStorage();

const cargaInicial = () => {
    if (ListaJuegos.length > 0) {
      //dibujar las filas
      ListaJuegos.map((juego, posicion) =>
        crearFila(juego, posicion + 1)
      );
    } else {
      console.log("No hay Juegos");
    }
  };
  
  const crearFila = (juego, fila) => {
    const tablaJuego = document.querySelector("tbody");
    tablaJuego.innerHTML += `
    <tr>
      <th class="align-middle text-center" scope="row">${juego.codigo}</th>
      <td class="align-middle">
          <div class="d-flex flex-row justify-content-between w-100">
              <div class="col-2">
                  <img src="../img/${juego.img}" class="w-50 img-fluid rounded-start" alt="...">
                </div>
                <div class="col-10 ">
                    <h5 class="align">${juego.nombre}</h5>
                    <p class="text-truncate" style="max-width: 350px;">${juego.detalles}</p>
                </div>
          </div>
      </td>
      <td class="align-middle text-center">${juego.categoria}</td>
      <td class="align-middle text-center">
          <div class="">
              <button class="mx-1 my-1 btn btn-secondary" id="btnVerMas">Ver mas</button>
              <button class="btn btn-primary my-1 mx-1" id="btnEditar">Editar</button>
              <button class="btn btn-danger my-1 mx-1" id="btnBorrar">Borrar</button>
          </div>
      </td>
    </tr>
    `;
  };

formularioAdministrarJuego.addEventListener("submit",crearJuego);
btnCargar.addEventListener("click",MostrarModalJuegoAdministracion)

cargaInicial();