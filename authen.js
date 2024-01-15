const express=require("express");
const bcrypt=require('bcrypt js')
const router=express.Router();
router.post("/workers",async(req,res)=>{
    const{username,password}=req.body;
    const workers=await Workers.findOne({username})
    if(!workers){
        const hashedpassword=await bcrypt,hash(password,10);
        const newWorker= new Worker({username,password:hashedpassword});
        await newWorker.save();
        return res.json(201).json({message:'User Created'});

    }
    restart.status(404).json({message:"user already exists"});

})