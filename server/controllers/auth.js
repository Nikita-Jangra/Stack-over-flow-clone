// req= request   res=response
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup =async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const existinguser = await users.findOne({email})
        if(existinguser){
            console.log(existinguser)
            return res.status(404).json({message:"User already exist."})
        }
        const hashedpassword =await bcrypt.hash(password,12)
        const newUser =await users.create({name,email,password:hashedpassword})
        const token=jwt.sign({email:newUser.email,id:newUser._id},"test",{expiresIn:'1h'})
        res.status(200).json({result:newUser,token})
        
    } catch (error) {
        res.status(500).json('Something went wrong...')
        console.log (error)
    }
}
export const login =async(req,res)=>{
    const {email,password}=req.body;
    try{
        const existinguser = await users.findOne({email})
        if(!existinguser){
            console.log(existinguser)
            return res.status(404).json({message:"User do not exist."})
        }
        const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.status(404).json({message:"Invalid Credentials"})
        }
        const token=jwt.sign({email:existinguser.email,id:existinguser._id},"test",{expiresIn:'1h'})
        res.status(200).json({result:existinguser,token})
        
    }catch(error){
        res.status(500).json('Something went wrong...')
        console.log (error)

    }

}