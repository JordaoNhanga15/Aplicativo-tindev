const { remove } = require("../models/Dev");

const Dev=require('../models/Dev')

module.exports={
   async store(req,res){
        const {user,namee,biog,nam_user}=req.headers
        //console.log(namee_user)
        const loggedev=await Dev.findById(user)
      await  Dev.update(
            { _id :loggedev._id},
            {$set:{
                name:namee,
                //  avatar:img, 
                bio:biog,
                user_name:nam_user
            }}
           
        )
        
         res.send({
             ok:true
         })
        
    }
}