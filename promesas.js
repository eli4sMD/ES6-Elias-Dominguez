const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    await retrasar(1800);

    try {
        const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
        const provincias = await response.json()
    console.log(provincias.provincias)    
    } catch (error) {
        console.log("Error al cargar las provincias")
    }
    
}


// Función que retorna los datos de departamentos
const obtenerDptos = async () => {
    await retrasar(1391);

    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos');
        const departamentos = await consulta.json()
        console.log(departamentos.departamentos)   
    } catch (error) {
        console.log("Error al cargar los departamentos")
    }
}

// Función que retorna los datos de localidades
const obtenerLocalidades = async () => {
    await retrasar(900);

    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades');
        const localidades = await consulta.json()
        console.log(localidades.localidades)
    } catch (error) {
        console.log("Error al cargar los localidades")
    }
}



// Funcion para obtener todos los datos
const consultarDatos = async () => {
    try {
        await obtenerPcias();
        await obtenerDptos();
        await obtenerLocalidades();
    } catch (error) {
        console.log("Error al cargar los datos")
    }
}

consultarDatos();