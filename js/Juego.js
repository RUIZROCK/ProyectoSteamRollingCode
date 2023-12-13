export default class Juego{
    #codigo
    #nombre
    #detalles
    #categoria
    #precio
    #img
    #requisitos
    #desarrollador
    #resenias
    constructor(codigo = uuidv4(), nombre, requisitos ,  desarrollador , categoria , precio , detalles, img, resenias){
        this.#codigo=codigo
        this.#nombre=nombre
        this.#detalles=detalles
        this.#categoria=categoria
        this.#precio=precio
        this.#img=img
        this.#requisitos=requisitos
        this.#desarrollador=desarrollador
        this.#resenias=resenias
    }

    get requisitos(){
        return this.#requisitos
    }

    get desarrollador(){
        return this.#desarrollador
    }

    get resenias(){
        return this.#resenias
    }

    get codigo(){
        return this.#codigo
    }

    get nombre(){
        return this.#nombre
    }

    get detalles(){
        return this.#detalles
    }

    get categoria(){
        return this.#categoria
    }

    get precio(){
        return this.#precio
    }

    get img(){
        return this.#img
    }

    set requisitos(requisitos){
        this.#requisitos=requisitos
        
    }

    set desarrollador(desarrollador){
        this.#desarrollador=desarrollador
        
    }

    set resenias(resenias){
        this.#resenias=resenias
    }

    set codigo(codigo){
        this.#codigo=codigo
        
    }

    set nombre(nombre){
        this.#nombre=nombre
        
    }

    set detalles(detalles){
        this.#detalles=detalles
        
    }

    set categoria(categoria){
        this.#categoria=categoria
        
    }

    set precio(precio){
        this.#precio=precio
        
    }

    set img(img){
        this.#img=img
        
    }

    toJSON(){
        return {
            codigo: this.codigo,
            nombre: this.nombre,
            detalles: this.detalles,
            categoria: this.categoria,
            precio: this.precio,
            img: this.img,
            requisitos: this.requisitos,
            desarrollador: this.desarrollador,
            resenias: this.resenias}
    }
}