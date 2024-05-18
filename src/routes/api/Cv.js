const {Router} = require('express')
const methods = require('../../services/cvServices')

const routes =Router()

routes.get('/', async (req, res) => {
    try {
        const result = await methods.findAll()        
        if (result !== null || result !== undefined)  {
          return  res.status(200).json(result)
        }else{
           return  res.status(400).json({
                "message":"Error en el Request"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(' error al crear cv: '+ error)    
    }
})

routes.get('/buscar/:param', async(req, res)=>{
    const data ={
        id: req.params.param,
        key: req.query.key
    }

    var responseInfo

    try {
        const result = await methods.findOne(data)
        if (result !== null || result !== undefined)  {
            if (data.key ==="basic") {
                responseInfo = result.basics
            } else if(data.key ==="trabajo"){
                responseInfo = result.trabajo
            }else if(data.key ==="educacion"){
                responseInfo = result.educacion
            }else{
                responseInfo = {
                    message:"Error no existe informacion con el valor a buscar"
                }
            }
          return  res.status(200).json(responseInfo)
        }else{
           return  res.status(400).json({
                "message":"Error en el Request"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(' error al buscar cv: '+ error)    
    }    
})

routes.post('/updatecv', async(req, res)=>{
    const data = req.body
    try {
        const result = await methods.findOneAndUpdate(data)
        return  res.status(200).json(
            {message:"datos actuzalizados correctamente", data: result}
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(' error al editar cv: '+ error) 
    }
})

routes.post('/delete', async(req, res)=>{
    const data = req.body
    try {
        const result = await methods.findOneAndDelete(data)
        return  res.status(200).json(
            {message:"Documento eliminado correctamente"}
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(' error al editar cv: '+ error) 
    }
})

routes.post('/create', async(req, res)=>{
    const data = req.body
    //console.log("body ", data)
    try {
        const result = await methods.createCV(data)
        //console.log("result ", result)
        if (result !== null || result !== undefined)  {
          return  res.status(200).json(result)
        }else{
           return  res.status(400).json({
                "message":"Error en el Request"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(' error al crear cv: '+ error)    
    }    
})

module.exports = routes;