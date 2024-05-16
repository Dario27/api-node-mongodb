const Cv  = require('../models/schema.js')
const conectar = require('../DB/conexion.js')
const mongoose = require('mongoose')
const dbName = 'tarea'

async function  findOneAndUpdate  (data)  {
        try {
            const res = await Cv.findOne({"email":email})
            console.log("res 1 =>", res)
            if (res != null)
               return res   
            return null
        } catch (error) {
           return error.message
        }
}
    
async function createCV(data) {
    console.log("entramos al services a crear el cv")
        try {
            if (conectar.conectar()) {
                Cv.create(data).then((resp) => {
                    console.log("Certificado creado..", resp);
                    return resp
                  });                
            }else{
                console.log("error no se pudo conectar la base") 
            }
        } catch (error) {
           return error.message
        }
}

module.exports = {
    findOneAndUpdate,
    createCV
}