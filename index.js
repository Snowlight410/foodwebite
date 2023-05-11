const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
res.sendFile(__dirname +'/main.html')
})

app.listen('4001',()=>{
    console.log('Server is running on the port')
})