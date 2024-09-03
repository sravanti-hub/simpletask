const {MONGO_URL}=require('../env/env');
const mongoose=require('MONGO_URL')
connectToDatabase=require(connection);
mongoose.connection.on("connected",MONGO_URL())
console.log("successfully mongodb connected")

module.exports={
    connectToDatabase,
}