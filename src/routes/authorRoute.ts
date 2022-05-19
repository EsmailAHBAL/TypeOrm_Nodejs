import {
    Router
} from "express";
import Joi = require("joi");
import AuthorService from "../service/AuthorService";

const route = Router()
const schema=Joi.object({
    id:Joi.number().required()
    ,
    lastName:Joi.string().min(3).required(),
    firstName:Joi.string().min(3).required(),
    age:Joi.number().required()
})
route.post('/update',(req,res,next)=>{

    const api=req.body
    const {value,error}=schema.validate(api)
 try {
     
    if(error) {

    next(error)
    return
    } 
        
     
    AuthorService.updateData(api).then(dataUpdated=>{
        res.send(dataUpdated)
    }).catch(err=>{
       next(err)
    })
 } catch (error) {
     return res.json({error})
 }
})
route.get("/ex/:id",(req,res)=>{

     const id=req.params.id
     const name=req.query.name

     
    if(isNaN(parseInt(id))) 
 {       
       res.send("Is A Not A Number")
}

const timer=[1,17,78]
   AuthorService.getDataByID(parseInt(id)).then(dataById=>{

        res.json({dataById})
    })

    
    
})
route.get('/all', (req, res) => {
    try {

        AuthorService.getData().then(result => {

            res.send(result)

        })


    } catch (error) {
        res.send(error)
    }
})

route.post('/add', (req, res) => {
    try {
        const {
            id,
            first,
            last,
            age
        } = req.body

        AuthorService.register(id, first, last,age)

        res.status(200).json({result:"Saved With Success"})
    } catch (error) {
        res.send(error)

    }
})

export
default route