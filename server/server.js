const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5003;

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
}) 
// let messages = [{ from: 'mom', message: 'i love you'}]
let messages = [];

app.get('/messages', (req,res) =>{
    console.log('/messages GET hit');
    res.send(messages);
    
}) // end messages GET

app.post('/messages', (req, res)=>{
    console.log('in /messages POST', req.body );
    messages.push(req.body);
    // must respond to trigger "then" on client side
    res.sendStatus(201);
}) // end /messages POST