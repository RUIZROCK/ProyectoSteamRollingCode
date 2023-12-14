import {ListaUsuarios} from './apps.js'

const cargaIntegrantesNosotros = () => {
    if (ListaUsuarios.length > 0) {
      //dibujar las filas
      ListaUsuarios.map((integrante) =>
        crearCardNosotros(integrante)
      );
    
    }
  };

  const crearCardNosotros = (integrante)=> {
    
    const contenedorCardNosotros = document.getElementById ("contenedorCardNosotros1");
    contenedorCardNosotros.innerHTML+= `<div class="row d-flex col-4 col-sm-12 col-md-4 col-lg-4 justify-content-center"><div class=" col-4 col-sm-8 m-5"><div class="card">
    <img src="../img/${integrante.img}" class="card-img-top" alt="img-${integrante.nombre}"/><div class="card-body"><p class="card text text-center font-monospace">${integrante.nombre} ${integrante.apellido} </p></div>
    </div></div></div>
    `   
  }

  cargaIntegrantesNosotros();