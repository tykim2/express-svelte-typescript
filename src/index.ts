import express, {Request, Response} from 'express'
import path from 'path'

const app = express()

app.use(express.static('public'))

app.get('*', (req:Request, res:Response)=>{
    res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(3000, ()=>{
    console.log('Yeah!')
})