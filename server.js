const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const {PORT}=require('./constants/constant')
const connectToDatabase=require('./database/db')

app.use('cors');
app.listen(PORT,()=>{
    console.log("port will be started:"+PORT)
})