const express = require('express')
const app = express();


let connectionString = process.env.CONN_STRING

app.get('/', (req, res) => {
    res.send('hello azzzzure no node modules...and an update'+connectionString)
})


let port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server running on http://localhost:${port}`);