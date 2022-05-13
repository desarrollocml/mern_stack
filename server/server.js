const express = require('express')
const app = express()

app.get('/',(req,res)=>res.json([{mesagge:'hola json'},
{mesagge:'hola json2'}]))


app.listen(5005,()=>console.log('SERVIDOR LEVANTADO'))