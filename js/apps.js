const 
modalJuego = new bootstrap.Modal (document.getElementById("modalJuego")),
btnCargar=document.getElementById("btnCargar"),
btnEditar=document.getElementById("btnEditar"),
btnVerMas=document.getElementById("btnVerMas"),
btnBorrar=document.getElementById("btnBorrar")

const MostrarModalJuegoAdministracion=()=>{
    modalJuego.show();
}


btnCargar.addEventListener("click",MostrarModalJuegoAdministracion)
btnEditar.addEventListener("click",MostrarModalJuegoAdministracion)
btnVerMas.addEventListener("click",MostrarModalJuegoAdministracion)
btnBorrar.addEventListener("click",MostrarModalJuegoAdministracion)