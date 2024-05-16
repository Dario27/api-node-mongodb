const express = require('express')
const bodyParser = require('body-parser')
const conectar = require('./DB/conexion.js')
const CV = require('./routes/api/Cv.js')

const app = express()
conectar.conectar()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar cabeceras y cors
app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');    
    next();
  });

app.use('/api/v1', CV)

app.get("/", async (req, res) => {
    res.status(200).json({
        status:200,
        message:"`Done!  Server Running "
    })
})

app.listen(3000, () => {
    console.log("Servidor está en el puerto 3000")
});


