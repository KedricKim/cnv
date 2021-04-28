const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/list/product", (req, res)=>{
    const sqlQuery = "SELECT * FROM tb_product";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});