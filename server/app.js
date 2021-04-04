const express = require('express');
const app = express();
const cors = require('cors');

const databaseInstance = require("./databaseInstance");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//read stat data
app.get('/termproject/getstats', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getStatData();

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//read to-do list
app.get('/termproject/api/getall', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getAllData();
    db.updateStatReport(1);

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

app.listen(8000, () => console.log("app is running"))