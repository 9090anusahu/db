
let mongoose=require('mongoose')
let userSchema=mongoose.Schema({
    name:{
        type:String,
        require
    },
    name:String,
    lastName:String,
    number:Number,
    isBool:Boolean
})
let User=mongoose.model('User',userSchema)
module.exports=User

