import * as express from 'express'
import LoggerService from '../logger/logger'
import postService from '../service/articleService'

const postRoute=express.Router()
const logger = new LoggerService("storage_Data")
 postRoute.get('/all',(req,res,next)=>{
     postService.getAllPost().then(result=>{
   logger.info("getData",result)
        res.status(201).json({data:result})
     }).catch(err=>{
        logger.error("Failed",err)
         next(err)
     })
 })

 postRoute.post('/add',(req,res,next)=>{
   console.log(req.body);
   
    postService.insertPost(req.body).then(result=>{
        logger.info("add new Post",result)
     
        res.status(201).json({result})
    }).catch(err=>{
        logger.error("Failed",err)
        next(err)
    })
 })
export default postRoute