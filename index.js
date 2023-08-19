const express = require('express')
require('dotenv').config()
const app = express()
const mongoose=require('mongoose')

app.use(express.json())
app.get(`/`, (req,res)=>{
    res.send(`hello social media app`)
})

const userRoutes=require('./routes/user.router');
app.use('/users',userRoutes)

mongoose.connect(process.env.CONNECTION_STRING,
{
    useNewUrlparser:true,
    useUnifiedTopology:true

}
)
const db=mongoose.connection;

db.on ("error",console.error.bind(console,"connection error :"));
db.once("open",function(){
    console.log("dtabase connected successfully ...")
})


app.listen(process.env.port, () => {
    console.log (`app listing on port ${process.env.port}`);
})