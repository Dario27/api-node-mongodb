const User  = require('../models/schema.js')

//const dbName = 'tarea'

async function  findOneAndUpdate(data)  {
        try {
            const res = await User.find({"basics.nombre":data.nombre}) //"basics.nombre":"Melanie Sanchez"
            console.log("res 1 =>", res)
            if (res != null)
               return res   
            return null
        } catch (error) {
           return error.message
        }
}
    
async function createCV(data) {
        try {
            const resp = await User.create(data)
            console.log("Curriculum creado..");
            return resp
        } catch (error) {
           return error.message
        }
}

module.exports = {
    findOneAndUpdate,
    createCV
}