let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}

console.log(pedro.edad);

pedro.estatura = 1.8;

delete pedro.activo;

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
        //console.log(pedro[llave])
    }
}

    console.log("Nombre: " + pedro.nombre);
    console.log("Edad: " + pedro.edad);
    console.log("Estatura: " + pedro.estatura);
    console.log("Hobbies: " + pedro.hobbies.join(", "));

    pedro.saluda = function() {
        console.log("Hola, me llamo " + this.nombre);
    }

    pedro.saluda();