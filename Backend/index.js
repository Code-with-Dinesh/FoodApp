const express = require("express")
const app = express()
const port = 5000
const cookieParser = require('cookie-parser');
const connectdb = require("./db")
const stripe = require("stripe")("sk_test_51Q22fKHrevWmd8IWtdkBjINuZLjfPhsnHYfro5snfk0N54f7ScIQqGMQXiIqA6mj2mWpWWQiqrh4PqqXq5iFsMdc00OfrVbg6i")
const createUser = require("./Routes/createuser")
const displaydata = require("./Routes/DisplayData")
const checkout = require("./Routes/checkout")
const cors = require('cors');
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true
}));
 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/v1/", createUser)
app.use("/api/v1/",displaydata)
app.use("/api/v1/",checkout)
app.listen(port,function(){
    console.log(`App listen on port number ${port}`)
})

app.get("/",function(req,res){
    res.send("Home route")
})

connectdb()