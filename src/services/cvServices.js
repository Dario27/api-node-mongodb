const User  = require('../models/schema.js')

//const dbName = 'tarea'

async function  findOneAndUpdate(data)  {
    const id = parseInt(data.id)
        try {
            const res = await User.findOneAndUpdate(
                {"id":id}, 
               { $set:  {"basics.nombre":data.nombre}}, 
                {new: true})
            console.log("res  =>", res)
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

async function findAll(){
    try {
        const res = await User.find() //muestra todos los documentos
        console.log("res 1 =>", res)
        if (res != null)
           return res   
        return null
    } catch (error) {
       return error.message
    }
}

async function findOne(data){
    console.log("data 1 =>", data)
    const id = parseInt(data.id)
    try {
        const res = await User.findOne({"id":id})
        console.log("res =>", res)
        if (res != null)
           return res   
        return null
    } catch (error) {
       return error.message
    }
}

async function findOneAndDelete(data){
    console.log("data 1 =>", data)
    const id = parseInt(data.id)
    try {
        const res = await User.findOneAndDelete({"id":id})
        console.log("res =>", res)
        if (res != null)
           return res   
        return null
    } catch (error) {
       return error.message
    }
}

module.exports = {
    findOneAndUpdate,
    createCV,
    findAll,
    findOneAndDelete,
    findOne
}