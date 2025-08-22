"use server"
import bcrypt from "bcryptjs"
import { collectionName, dbConnect } from "@/lib/db"

export const RegisterApi = async (data) =>{
    const { name, email, password } = data;
    const { db } = await dbConnect();
    const existingUser = await db.collection(collectionName.UserCollection).findOne({email: email});
    if(existingUser){
        throw new Error("User already exists with this emai");
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection(collectionName.UserCollection).insertOne({
        name,
        email: email,
        password: hashedPassword
    });
    console.log(result)
    return ({
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
})
}