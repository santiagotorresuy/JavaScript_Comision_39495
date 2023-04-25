//CONSTRUCTOR DE POKEMON NECESARIO PARA TENER LOS OBJETOS

class Pokemon{
    numero;
    nombre;
    generacion;
    tipo;
    altura;
    peso;
    habilidad;
    descripcion;
    
    constructor (numero, nombre, generacion, tipo, altura, peso, habilidad, descripcion)
{
    this.numero = numero;
    this.nombre = nombre;
    this.generacion = generacion;
    this.tipo = tipo;
    this.altura = altura;
    this.peso = peso;
    this.habilidad = habilidad;
    this.descripcion = descripcion;
}
}