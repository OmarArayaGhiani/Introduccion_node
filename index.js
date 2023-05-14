const {registrar, leer} = require("./operaciones")
const arguments = process.argv.slice(2)

if (arguments[0] === "registrar") {
  if (arguments.length === 6) {
    console.log("Registrando...")
    registrar(arguments)
  }
  else{
    console.log("Debes ingresar todos los datos, en el siguiente orden:")
    console.log('Escoge entre "registrar" o "leer"')
    console.log("Nombre")
    console.log("Edad")
    console.log("Tipo de animal (perro, gato, tortuga, etc)")
    console.log("Color")
    console.log("Síntoma")
  }
} else if (arguments[0] === "leer") {
  console.log("Leyendo...")
  leer()
} else if (arguments[0] === undefined) {
  console.log("Debes ingresar algún dato")
} else console.log('Indica en el primer campo si es "registrar" o "leer"')
