const mongoose = require("mongoose");

// const connectDB = async (url) => {
//   const connect = await mongoose.connect(url);
//   console.log(`MongoDB connected `);
// };

const connectDB = async(url) =>{
    try {
        const connect = await mongoose.connect(url);
        console.log(`MongoDB connected | ${connect.connection.name} | ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
        
    }
}
module.exports = connectDB;
