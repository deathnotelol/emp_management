import mongoose from "mongoose";

// const MONGO_URI = 'mongodb+srv://sawnaylinn:Linn@227186@cluster0.gq9fhpd.mongodb.net/?retryWrites=true&w=majority'
const MONGO_URI = 'mongodb://192.168.100.1:27017/';
const connectMongo = async () => {
    mongoose.set("strictQuery", false);
    try {
       const {connection} = await mongoose.connect(MONGO_URI) 

       if(connection.readyState === 1){
        console.log("Database connected successfully")
       }
    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;