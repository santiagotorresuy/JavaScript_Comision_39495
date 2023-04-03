//CONSTRUCTOR DE POKEMON NECESARIO PARA TENER LOS OBJETOS

class Pokemon{
    nombre;
    generacion;
    tipo;
    altura;
    peso;
    habilidad;
    descripcion;
    
    constructor (nombre, generacion, tipo, altura, peso, habilidad, descripcion)
{
    this.nombre = nombre;
    this.generacion = generacion;
    this.tipo = tipo;
    this.altura = altura;
    this.peso = peso;
    this.habilidad = habilidad;
    this.descripcion = descripcion;
}
}