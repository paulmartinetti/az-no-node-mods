const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('hello azzzzure no node modules...and an update :)')
})

let port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server running on http://localhost:${port}`);