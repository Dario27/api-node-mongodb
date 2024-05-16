const express = require('express')
const mongoose = require('mongoose')
const ruta = require('./models/ruta.js')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor está en el puerto 3000")
});

app.get("/", (req, res) =>{
    res.send("Hola desde NODE API SERVER")
});

app.post('/api/ruta', async (req,res) =>{
    try{
        const ruta = await ruta.create(req.body);
        res.status(200).json(ruta);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

mongoose.connect("mongodb+srv://admin:Sistema1234@tareadb.c1nkjg8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TareaDB ")
.then(() =>{
    console.log("conectado con BD")
})
.catch(() =>{
    console.log("conexión fallida")
})