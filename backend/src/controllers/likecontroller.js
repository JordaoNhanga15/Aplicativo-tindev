const dev=require('../models/Dev')

module.exports={
  async  store(req,res){
        
         const {devId} = req.params;
         const {user} = req.headers;

         const loggedId = await dev.findById(user)
         const targetDev= await dev.findById(devId)

       

         if(!targetDev){
             return res.status(400).json({error:'dev not exist'})
         }

         if(targetDev.like.includes(loggedId._id)){
            console.log('os dois deram like')
       }

         loggedId.like.push(targetDev._id)
         await loggedId.save()
         return res.json(loggedId)
    }
}