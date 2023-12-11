export default class Usuario{
    #nombre
    #apellido
    #tipo
    #correo
    #username
    #contrasenia

    constructor(codigo= uuidv4(),nombre,apellido,tipo,correo,username,contrasenia){
        this.#nombre=nombre
        this.#apellido=apellido
        this.#tipo=tipo
        this.#correo=correo
        this.#username=username
        this.#contrasenia=contrasenia
    }
}