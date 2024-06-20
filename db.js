let express=require('express')
 let app=express()
 
let User=require('./model/model.js')
let mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydata').then(()=>{
    console.log("server connected")
}).catch((err)=>{
    console.log(err,"server not connected")
})



let user=new User({name:"sam",lastName:"bahadur",number:98,isBool:true})
user.save();

 app.get('/',(req,res)=>{
    console.log("hello everyoneee!!!")
 })
 app.listen(4000,()=>{
    console.log('server running on port no 4000')
}) 