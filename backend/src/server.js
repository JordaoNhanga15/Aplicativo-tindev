const express=require('express')
const server=express();
const mongoose=require('mongoose')
const cors=require('cors')

const routes=require('./routes')

mongoose.connect('mongodb+srv://jordao:Marianhanga15@cluster0-1dw4f.mongodb.net/semana_8?retryWrites=true&w=majority',{
    useNewUrlParser:true
})

server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3030)