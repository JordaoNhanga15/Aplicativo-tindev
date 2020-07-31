const {Schema,model}=require('mongoose')

const devSchema= new Schema({
    name:{
        type:String,
        require:true,
    },
    user:{
        type:String,
        require:true
    },
    bio:String,
    avatar:{
        type:String,
        require:true
    }
    ,
    like:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }],
    deslike:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }]
},{
    timestamps:true
})

module.exports=model('Dev',devSchema)