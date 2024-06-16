import mongoose from "mongoose"



const connectDb = async()=>{
    try{
       await mongoose.connect("mongodb+srv://dhanush568kumar:PX8mEADVYIP80oFd@cluster0.rieivuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('db is connected');
    }catch(error){
        console.error(error.message);
        process.exit(1)
    }
}

export default connectDb