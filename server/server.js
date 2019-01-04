const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

const PORT = 5003;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
}) 