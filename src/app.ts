import * as express from 'express'
import route from './routes/authorRoute'
const app = express()
import * as volleyball from 'volleyball'
import postRoute from './routes/postRoute'

app.use(express.json())
app.use(volleyball)
app.use('/api/post',postRoute)
app.use('/api',route)
function notFound(req,res,next){
    res.status(400)
    const er = new Error('Not Found' +req.originalUrl)
    next(er)
}
function errorHandler(error,req,res,next){
    res.status(res.statusCode || 500)
    res.json({
        message:error.message,
        stack:error.stack
    })
}
app.use(notFound)
app.use(errorHandler)


export default app