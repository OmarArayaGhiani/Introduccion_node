const fs = require("fs")

const borrarCitas = (data) => {
  console.log("Borrando...")
  fs.writeFileSync(data, "[]")
}

borrarCitas("citas.json")