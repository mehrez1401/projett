const user=require ('../models/user.model')


exports.signup=(req,res)=>{
    
   
    const data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        bio:req.body.bio,
        picture:req.body.picture,
        birthdate:req.body.birthdate

    }
const_user=new user(data);
_user.save().then(
    (createdUser) => {
    res.status(200).json({ message: "user added successfully..." })
}
).catch(
    (err)=>{
        res.status(400).json({message:"probleme while adding the user..."})
    }
)

}