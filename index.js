const express = require("express")
app = express()

const os = require('os');

const getIpAddress = () => {
  const interfaces = os.networkInterfaces();
  let ipAddress = '';

  // Iterate through network interfaces to find the IP address
  for (const interfaceName in interfaces) {
    const interfaceArray = interfaces[interfaceName];
    for (const iface of interfaceArray) {
      // Skip internal and IPv6 addresses
      if (iface.internal || iface.family !== 'IPv4') continue;

      ipAddress = iface.address;
      break; // Stop iterating if we found the first non-internal IPv4 address
    }

    if (ipAddress) break; // Stop iterating if we found the IP address
  }

  return ipAddress;
};

// Usage example:
const ipAddress = getIpAddress();

const port = 80
app.listen(port, ()=>{
    console.log(`Listening on port no: ${port}`)
})

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/static/welcome.html`)
})

// App Endpoints
app.get("/app",(req,res)=>{
    res.send(`<h1>Welcome to App FROM ${ipAddress}</h1>`)
})

app.get("/app/signup",(req,res)=>{
    res.send(`<h1>Welcome to Signup Page FROM ${ipAddress}</h1>`)
})

app.get("/app/login",(req,res)=>{
    res.send(`<h1>Welcome to Login Page FROM ${ipAddress}</h1>`)
})


// API Endpnits
app.get("/api",(req,res)=>{
    res.send(`<h1>Welcome to API FROM ${ipAddress}</h1>`)
})

app.post("/api/login",(req,res)=>{
    res.send(`<h1>You are requesting for Login API FROM ${ipAddress}</h1>`)
})

app.post("/api/Signup",(req,res)=>{
    res.send(`<h1>You are requesting for Signup API FROM ${ipAddress}</h1>`)
})

app.get("/api/products",(req,res)=>{
    res.json({
        ip:`${ipAddress}`,
        payload:
        [
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
    ]})
})


// Logs Endpoints
app.get("/mylogs",(req,res)=>{
    res.send(`<h1>Welcome to Logs FROM ${ipAddress}</h1>`)
})

app.get("/mylogs/order/:orderid",(req,res)=>{
    res.send(`<h1>Fetching logs for latest order no. ${req.params.orderi} FROM ${ipAddress}</h1>`)
})