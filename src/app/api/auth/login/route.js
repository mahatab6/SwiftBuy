"use server"
import bcrypt from "bcryptjs"

import { collectionName, dbConnect } from "@/lib/db";

export const LoginApi  = async (data) =>{
    const {email, password} = data;
    const {db} = await dbConnect();
    const usercollection = db.collection(collectionName.UserCollection);
    const user = await usercollection.findOne({email: email});
    if(!user){
        return null;
    }
    const isPassword =await bcrypt.compare(password, user.password);
    if(!isPassword){
        return null;
    }
    return user;
} 