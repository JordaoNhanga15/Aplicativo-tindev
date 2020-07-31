const axios=require('axios')
const Dev=require('../models/Dev');
//const { Query } = require('mongoose');
//const { dev } = require('../routes');

module.exports={
    async index(req,res){
        const { user } = req.headers;
        //console.log(na)
        const loggeDev = await Dev.findById(user);
        const users=await Dev.find({
            $and:[
                { _id:{$ne:user}},
                { _id:{$nin:loggeDev.like}},
                { _id:{$nin:loggeDev.deslike}}
            ],   
        })
        
        //console.log(loggeDev.name)
        //console.log(user)
        return res.json(users)
        
    },


   async store(req,res){
        const {username}=req.body;
        const response= await axios.get(`https://api.github.com/users/${username}`)

        const {name,bio,avatar_url:avatar}=response.data
        const userExist=await Dev.findOne({user:username})
        //console.log(bio)
        if(userExist){
        return res.json({userExist})
        }
        
 
    const dev=await Dev.create({
            name,
            user:username,
            bio,
            avatar
        })
        return res.json(dev)
    } ,
    async query(req,res){
        const {user,namee,biog,nam_user}=req.headers
        
        const loggedev=await Dev.findById(user)
      await  Dev.update(
            { _id :loggedev._id},
            {$set:{
                name:namee,
                //  avatar:img, 
                bio:biog,
                //user:nam_user
            }}
           
        )
        //console.log(nam_user)
         res.send({
             ok:true
         })
        
    }
}