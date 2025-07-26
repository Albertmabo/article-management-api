require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/db/connect");

const PORT = process.env.PORT || 3001;

const start = async() =>{
    try {
        if(!process.env.URL){
            // TODO: Replace with centralized error handler (customError handler)
            console.log("There is no MongoDB connection string");
        }

    await connectDB(process.env.URL);

    app.listen(PORT, () => {
        console.log(`Server is runnig at PORT${PORT}`)
        });
    } catch (error) {
        console.log(error);
        
        
    }
}
start();