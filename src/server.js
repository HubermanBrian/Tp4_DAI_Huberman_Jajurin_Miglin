import express  from "express"; // hacer npm i express

import cors     from "cors";    // hacer npm i cors


const app  = express();

const port = 3000;              // El puerto 3000 (http://localhost:3000)


// Agrego los Middlewares

app.use(cors());         // Middleware de CORS

app.use(express.json()); // Middleware para parsear y comprender JSON


//

// Aca pongo todos los EndPoints

//

app.get('/', (req, res) => {                // EndPoint "/"

    res.send('Ya estoy respondiendo!');

})

//localhost:3000/saludar/ian   (req.params.nombre)
app.get('/saludar/:nombre', (req, res) => {             // EndPoint "/saludar"
    res.send(`Hola ${req.params.nombre}`);

})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {             // EndPoint "/saludar"

    let nan
    nan = isNaN(req.body)
    if(nan)
    {
        res.status(200).send('Todo OK!');
    }else{
        res.status(400).send('Mal ingreso de datos')
    }
    

})


 

//

// Inicio el Server y lo pongo a escuchar.

//

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})

