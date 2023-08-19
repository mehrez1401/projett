const mongoose= require('mongoose');


const postSchema=new mongoose.model({
name:String,
description:String,
media :[],
creator:{
    type:mongoose.Types.ObjectId,
    ref :'users',
    required:true

}


})
module.exports=mongoose('posts',postSchema)