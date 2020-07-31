const express = require('express')
const devcontrollers = require('./controllers/devcontrollers')
const Likecontroller = require('./controllers/likecontroller')
const update = require('./controllers/update')
const deslikecontroller = require('./controllers/deslikecontroller')
const query=require('./controllers/query')
const routes=express.Router()


routes.post('/devs',devcontrollers.store)
routes.get('/devs',devcontrollers.index)
routes.get('/query',query.store)
routes.post('/devs/:devId/likes',Likecontroller.store)
routes.post('/devs/:devId/deslikes',deslikecontroller.store)
//routes.post('/devs/:devId:name:bio/update',update.store)
routes.post('/devs/:devId:name:bio/',devcontrollers.query)
module.exports=routes; 