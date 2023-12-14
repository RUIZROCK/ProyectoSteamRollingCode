import { ListaJuegos } from "./apps.js";

const guardarEnLocalStorage = () => {
    console.log(ListaJuegos);
    localStorage.setItem("lista", JSON.stringify(ListaJuegos));
  };
  guardarEnLocalStorage();


 const crearDetalleJuego =(codigo)=>{
 const juego = ListaJuegos.find(j=>j.codigo=== codigo)
 if(juego != null){
  const div = document.getElementById ("detalleTextoJuego")
div.innerHTML= `
<div class="row">
  <div class="card bg-Steam col-lg-6">
    <div class="card-body-detalles p-3">
      <h2 class="card-title p-2 ">${juego.nombre}</h2>
      <p class="card-text p-2">   

      <p><b>Categoria :</b> ${juego.categoria}</p>

      <p><b>Detalles :</b>${juego.detalles}</p> 

      <p><b>Desarrollador :</b>${juego.desarrollador}</p>

      <p><b>Requisitos :</b>${juego.requisitos}</p>

      <p><b>Precio :</b>${juego.precio}</p>


      <div class="p-2">
        <a href="#" class="btn btn-primary ">Comprar</a>
      </div>
    </div>
  </div>

  <div class="col-6 col-lg-5">
    <img class="img-fluid w-100 mb-3" src="../img/${juego.img}" alt="mortalkombat">
  </div>
</div>
    
</div>


<div class="my-5">
<h3 class="text-light">Opiniones </h3>
<table class="table table-dark ">
<thead>
<tr>

<th scope="col">Comentario</th>

</tr>
</thead><tbody id="tbodyDetalles"></tbody>`
const div2 = document.getElementById ("tbodyDetalles")

let array = juego.resenias
let fila = ""
for(let i=0; i<array.length; i++){
  fila +="<tr class='py-8'><td>'"+array[i]+"'</td></tr>"
  }
  fila += "</tbody></table>"
  div2.innerHTML=fila
}
}

 crearDetalleJuego(ListaJuegos[2].codigo)
