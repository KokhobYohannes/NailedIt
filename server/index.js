const express = require("express");
const app = express();
const dotenv = require("dotenv");


app.use(express.json()); // apply any common request
app.use(express.static('public'))

//connect to mongoDB

mongoose.connect(process.env.MDB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifieldTopology: true
    },(err)=>{
    if (err)
        return console.error(err);
        console.log("Connect to MongoDB");
})

//setup server
const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send("it works")
})

// setup routes

app.use("/auth", require("./routers/userRouter"));








app.listen(PORT, ()=> console.log(`Server start on Port: ${PORT}`));


