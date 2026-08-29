import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB CONNECTED");
    } catch (error) {
        console.log(error);
    }
};

export { ConnectDB };