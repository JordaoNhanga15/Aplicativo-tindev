const Dev = require('../models/Dev')

module.exports={
    async store(req,res){
        const {user} = req.headers;
        const Log = await Dev.findById(user)
        //console.log(Log)
        return res.json(Log)
    }
}