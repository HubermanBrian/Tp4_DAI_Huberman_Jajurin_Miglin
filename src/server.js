import express  from "express"; // hacer npm i express

import cors     from "cors";    // hacer npm i cors

import Alumno from "./models/alumno.js"

import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"

import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"


const app  = express();

const port = 3000;              // El puerto 3000 (http://localhost:3000)


// Agrego los Middlewares

app.use(cors());         // Middleware de CORS

app.use(express.json()); // Middleware para parsear y comprender JSON


//

// Aca pongo todos los EndPoints

//

app.get('/', (req, res) => {                // EndPoint "/"

    res.send('Ya estoy respondiendo!')

})

//localhost:3000/saludar/ian   (req.params.nombre)
app.get('/saludar/:nombre', (req, res) => {             // EndPoint "/saludar"
    res.send(`Hola ${req.params.nombre}`)

})

//localhost:3000/validarfecha/:2024/:05/:23 
app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    const { ano, mes, dia } = req.params
    const fecha = `${ano}-${mes}-${dia}`
    
    if (!isNaN(Date.parse(fecha))) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  })


// Inicio el Server y lo pongo a escuchar.

//

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})

