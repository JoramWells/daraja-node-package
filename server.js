const express = require('express')
const app = express()
const access = require('./app')

//global use of access token

app.use(access)
app.get('/',(req,res)=>{
    res.send(200)
    console.log(req.access_token)
})

//inline use of access token
// app.get('/',access,(req,res)=>{
//     res.send(200)
//     console.log(req.access_token)
// })

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})