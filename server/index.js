const express = require("express");
const app = express();
const cors = require("cors")
 const mongoose = require('mongoose')
const FriendModel=require('./models/Friends')
app.use(cors())
app.use(express.json())
//  Database connect
mongoose.connect("mongodb://localhost:27017/TutorialMern",
{useNewUrlParser: true}
);

app.post('/addfriend',async (req,res)=>{

    const name = req.body.name
    const age = req.body.age

const Friend = new FriendModel({name:name,age:age});
await Friend.save()
res.send('Succesfully added')
})

app.get('/read',async (req,res)=>{
    
    FriendModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
   
    })

app.listen(3001,() => {
    console.log("You are connected")
});