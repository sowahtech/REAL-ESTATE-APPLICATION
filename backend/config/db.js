import mongoose from 'mongoose'


export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://sowahtech_db_user:Db5Q0yTUWtPye3tY@cluster0.gzuwphf.mongodb.net/RealEState").then(() => {
        console.log('DB CONNECTED')
    })
}