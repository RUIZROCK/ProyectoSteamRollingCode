import { ListaJuegos } from "./apps.js";

const cargaInicialIndex = () => {
    console.log(ListaJuegos)
    if (ListaJuegos.length > 0) {
      //dibujar las filas
      ListaJuegos.map((juego) =>
        crearCards(juego)
      );
    } else {
      console.log("No hay Juegos");
    }
  };


  const crearCards = (juego) => {
    const articulDeCard = document.getElementById("articulDeCard");
    articulDeCard.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 mb-3">
            <div class="card h-100">
              <img
                src="../img/${juego.img}"
                class="card-img-top categoriasImg"
                alt="#" 
              />
              <div class="card-body text-dark d-flex flex-column">
                <h5 class="card-title text-center">${juego.nombre}</h5>
                <p class="card-text">
                  <ul>
                    <li>${juego.detalles}</li>
                  </ul>
                  
                </p>
                <p>
                ${juego.precio}
                </p>
                <div class="mt-auto">
                  <div>
                    <a href="#" class="btn w-100 botonVerMasYCarrito mb-1"
                    >Ver más</a>
                </div>
                <div>
                  <a href="#" class="btn w-100 botonVerMasYCarrito mb-1"
                    >Añadir al carrito</a>
                </div>
                </div>
              </div>
            </div>
          </div>
    `;
  };

  


  cargaInicialIndex();