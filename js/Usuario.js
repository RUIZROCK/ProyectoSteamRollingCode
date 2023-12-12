export default class Usuario{
    #nombre
    #apellido
    #tipo
    #correo
    #username
    #contrasenia
    #img

    constructor(codigo= uuidv4(),nombre,apellido,tipo,correo,username,contrasenia,img){
        this.#nombre=nombre
        this.#apellido=apellido
        this.#tipo=tipo
        this.#correo=correo
        this.#username=username
        this.#contrasenia=contrasenia
        this.#img=img
    }

    get nombre(){
        return this.#nombre
    }

    get apellido(){
        return this.#apellido
    }

    get tipo(){
        return this.#tipo
    }

    get correo(){
        return this.#correo
    }
    get username(){
        return this.#username
    }

    get contrasenia(){
        return this.#contrasenia
    }

    get img(){
        return this.#img
    }

    set nombre(nombre){
        this.#nombre=nombre
    }

    set apellido(apellido){
        this.#apellido=apellido
    }

    set tipo(tipo){
        this.#tipo=tipo
    }

    set correo(correo){
        this.#correo=correo
    }
    set username(username){
        this.#username=username
    }

    set contrasenia(contrasenia){
        this.#contrasenia=contrasenia
    }

    set img(img){
        this.#img=img
    }
}