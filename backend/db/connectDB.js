import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false); // Suppress strictQuery deprecation warning
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`Error in connecting DB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;