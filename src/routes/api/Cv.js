const {Router} = require('express')
const methods = require('../../services/cvServices')

const routes =Router()

routes.post('/buscar', async(req, res)=>{
    const data = req.body
    try {
        const result = await methods.findOneAndUpdate(data)
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