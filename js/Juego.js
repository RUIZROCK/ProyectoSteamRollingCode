export default class Juego{
    #codigo
    #nombre
    #detalles
    #categoria
    #precio
    #img
    #descripcion
    #requisitos
    #desarrollador
    #resenias
    constructor(codigo = uuidv4(), nombre, descripcion, requisitos ,  desarrollador , categoria , precio , detalles, img, resenias){
        this.#codigo=codigo
        this.#nombre=nombre
        this.#detalles=detalles
        this.#categoria=categoria
        this.#precio=precio
        this.#img=img
        this.#descripcion=descripcion
        this.#requisitos=requisitos
        this.#desarrollador=desarrollador
        this.#resenias=resenias
    }
}