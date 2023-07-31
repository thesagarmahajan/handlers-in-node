const express = require("express")
app = express()
const port = 80
app.listen(port, ()=>{
    console.log(`Listening on port no: ${port}`)
})

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/static/welcome.html`)
})

// App Endpoints
app.get("/app",(req,res)=>{
    res.send("Welcome to App")
})

app.get("/app/signup",(req,res)=>{
    res.send("Welcome to Signup Page")
})

app.get("/app/login",(req,res)=>{
    res.send("Welcome to Login Page")
})


// API Endpnits
app.post("/api/login",(req,res)=>{
    res.send("You are requesting for Login API")
})

app.post("/api/Signup",(req,res)=>{
    res.send("You are requesting for Signup API")
})

app.get("/api/products",(req,res)=>{
    res.json([
        {
            id:1,
            name:"Product 1",
            price:100,
            description:"This is product 1"
        },
        {
            id:2,
            name:"Product 2",
            price:200,
            description:"This is product 2"
        },
        {
            id:3,
            name:"Product 3",
            price:300,
            description:"This is product 3"
        }
    ])
})


// Logs Endpoints
app.get("/logs/order/:orderid",(req,res)=>{
    res.send("Fetching logs for latest order no. "+req.params.orderid)
})