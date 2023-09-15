const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

   // EJERCICIO 1
   const personajesMayoresDeEdad = personajesSimpsons.filter(personaje => personaje.edad >= 18)
   console.log(personajesMayoresDeEdad);

   // EJERCICIO 2
   const totalEdades = personajesMayoresDeEdad.reduce((sumatoria, personaje) => sumatoria + personaje.edad,0)
   console.log(totalEdades);

   // EJERCICIO 3
   const nombresMayoresDeEdad = personajesMayoresDeEdad.map(personaje => personaje.nombre);
   console.log(nombresMayoresDeEdad);

   // EJERCICIO 4
   let personajesMenoresDeEdad = personajesSimpsons.filter(personaje => personaje.edad < 18)
   personajesMenoresDeEdad.map(personaje => personaje.rol = "Estudiante")
   const personajesActualizados = [...personajesMayoresDeEdad, ...personajesMenoresDeEdad] 
   console.log(personajesActualizados); 
   
   // EJERCICIO 5
   const personajesNuevos = [
    { nombre: "Moe", edad: 42, rol: "Cantinero" },
    { nombre: "Monty", edad: 126, rol: "Jefe" },
    { nombre: "Gorgory", edad: 41, rol: "Policia" },
    ];

    const listadoFinal = [...personajesActualizados, ...personajesNuevos]
    console.log(listadoFinal);
   