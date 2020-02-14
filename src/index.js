const express = require('express');
const device = require('express-device');
const app = express();

app.use(device.capture())
app.get('/', (req, res)=>{
    res.send('katapulta '+req.device.type);
})
app.listen(3000,()=>{
    console.log('Server on port 3000');
})