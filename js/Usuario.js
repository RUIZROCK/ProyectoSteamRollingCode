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
}