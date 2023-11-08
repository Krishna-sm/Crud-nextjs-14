import mongoose from 'mongoose'

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');
    console.log(`mongoose is connect with ${mongoose.connection.host}`)
}