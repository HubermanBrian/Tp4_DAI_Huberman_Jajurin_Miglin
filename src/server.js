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


  app.get('/matematica/sumar', (req, res) => {

    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = sumar(num1,num2)
    res.status(200).send(`El resultado es ${resultado}`)

  })
  app.get('/matematica/restar', (req, res) => {

    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = restar(num1,num2)
    res.status(200).send(`El resultado es ${resultado}`)

  })
  app.get('/matematica/multiplicar', (req, res) => {

    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = multiplicar(num1,num2)
    res.status(200).send(`El resultado es ${resultado}`)
  })
  app.get('/matematica/dividir', (req, res) => {

    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = dividir(num1,num2)
    res.status(200).send(`El resultado es ${resultado}`)
  })

  app.get('/omdb/searchbypage', (req, res) => {

   const search = req.query.search 
   const p = parseInt(req.query.pagina)
   const resultado = OMDBSearchByPage(search,p)
   res.status(200).send(`El resultado es ${resultado}`)

  })
  app.get('/omdb/searchcomplete', (req, res) => {

    const search = req.query.search 
    const resultado = OMDBSearchComplete(search)
    res.status(200).send(`El resultado es ${resultado}`)
 
   })


   app.get('/alumnos', (req, res) => {

    const alumnosArray = [] ;
    alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18));
    const resultado = alumnosArray
    res.status(200).send(`El resultado es ${resultado}`)
   })

   app.get('/alumnos/:dni', (req, res) => {

    const alumnosArray = [] ;
    alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18));
    const dni = req.params.dni
    let encontrado = false
    function checkDni(dni){
      let i = 0;
      do{
        if(alumnosArray[i].dni = dni){
          encontrado = true
        }
        else
        {
          i++
        }
        
      }while(encontrado != true || i >= alumnosArray.length)
      return i;
    }
    const pos = alumnosArray.findIndex(checkDni)
    console.log(pos)
    /*if(pos!= undefined){
      Alumno persona = alumnosArray[pos]
      res.status(200).send(`El resultado es ${resultado}`)
    }*/
    
   })
// Inicio el Server y lo pongo a escuchar.

//

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})

