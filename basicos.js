console.log("Hola mundo")
var nombre="Bauti"
var edad="22"
var mayorDeEdad=edad>18
var direction={
    street:"Formosa",
    number:"2755"
}
var coloresFav=["Rojo","Blanco"]
var lenguajesFavoritos=["Dart","JavaScript"]
var mejorLenguaje=lenguajesFavoritos[0]
var numero1=1
var numero2=5
console.log(numero1+numero2)
var saludo="Hola"
if (saludo=="Hola"){
    console.log("Ha saludado")
}
var pokemones=["Pikachu","Bulbazort","Squire"]
console.log(pokemones[0])
console.log(pokemones[1])
console.log(pokemones[2])
console.log(pokemones[0],pokemones[1],pokemones[2])
for (let i=0;i<pokemones.length;i++){
      console.log(pokemones[i])
}
var pokemosss=[
    {
        nombre:"Pikachu",
        tipoDePokemon:"Electrico"
    },
    {
        nombre:"Bulbazort",
        tipoDePokemon:"agua"
    }
    ,
    {
        nombre:"Charizard",
        tipoDePokemon:"Fuego"

    }
]
for (let j=0;j<pokemosss.length;j++){
     if (pokemosss[j].tipoDePokemon=="Fuego"){
        console.log("El",pokemosss[j].nombre,"es un pokemon de fuego")
     }

}