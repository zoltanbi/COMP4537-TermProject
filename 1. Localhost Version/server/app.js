const express = require('express');
const app = express();
const cors = require('cors');

const databaseInstance = require("./databaseInstance");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//=====================================
//PERSONAL TODO LIST
//=====================================

//read
app.get('/getallpersonal', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getAllPersonalData();
    db.updateStatReport("personal_getall");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//create
app.post('/insertpersonal', (req, res) => {
    const { name } = req.body;
    const { item } = req.body;

    const db = databaseInstance.getDatabaseInstance();

    const result = db.insertNewPersonal(name, item);
    db.updateStatReport("personal_insert");

    result
        .then(data => res.json({data: data}))
        .catch(err => console.log(err))
})

//delete
app.delete('/deletepersonal/:id', (req, res) => {
    const { id } = req.params;

    const db = databaseInstance.getDatabaseInstance();

    const result = db.deletePersonalTableRow(id);
    db.updateStatReport("personal_delete");

    result
        .then(data => res.json({success : data}))
        .catch(err => console.log(err));
})

//update
app.patch('/updatepersonal', (req, res) => {
    const {id, name, item} = req.body;
    const db = databaseInstance.getDatabaseInstance();

    const result = db.updatePersonal(id, name, item);
    db.updateStatReport("personal_update");

    result
        .then(data => res.json({success: data}))
        .catch(err => console.log(err))
});

//=====================================
//School TODO LIST
//=====================================

//read
app.get('/getallschool', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getAllSchoolData();
    db.updateStatReport("school_getall");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//create
app.post('/insertschool', (req, res) => {
    const { name } = req.body;
    const { item } = req.body;

    const db = databaseInstance.getDatabaseInstance();


    const result = db.insertNewSchool(name, item);
    db.updateStatReport("school_insert");

    result
        .then(data => res.json({data: data}))
        .catch(err => console.log(err))
})

//delete
app.delete('/deleteschool/:id', (req, res) => {
    const { id } = req.params;

    const db = databaseInstance.getDatabaseInstance();

    const result = db.deleteSchoolTableRow(id);
    db.updateStatReport("school_delete");

    result
        .then(data => res.json({success : data}))
        .catch(err => console.log(err));
})

//update
app.patch('/updateschool', (req, res) => {
    const {id, name, item} = req.body;
    const db = databaseInstance.getDatabaseInstance();

    const result = db.updateSchool(id, name, item);
    db.updateStatReport("school_update");
    result
        .then(data => res.json({success: data}))
        .catch(err => console.log(err))
});


//=================
// Personal Page APIs
//=================

//read to-do list
app.get('/termproject/api/personal/getall', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getAllPersonalData();
    db.updateStatReport("personal_getall");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//get by id
app.get('/termproject/api/personal/get/:id', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getPersonalDataById(req.params.id);
    db.updateStatReport("personal_get");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//delete by id
app.delete('/termproject/api/personal/delete/:id', (req, res) => {

    const db = databaseInstance.getDatabaseInstance();

    const result = db.deletePersonalTableRow(req.params.id);
    db.updateStatReport("personal_delete");

    result
        .then(data => res.json({success : data}))
        .catch(err => console.log(err));
    res.send("delete request complete")
})

//update
app.patch('/termproject/api/personal/update/:id/:name/:item', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.updatePersonal(req.params.id, req.params.name, req.params.item);
    db.updateStatReport("personal_update");

    result
        .then(data => res.json({success: data}))
        .catch(err => console.log(err))
    res.send("updated values successfully")
});

//post
app.post('/termproject/api/personal/insert/:name/:item', (req, res) => {

    const db = databaseInstance.getDatabaseInstance();


    const result = db.insertNewPersonal(req.params.name, req.params.item);
    db.updateStatReport("personal_insert");

    result
        .then(data => res.json({data: data}))
        .catch(err => console.log(err))
    res.send("inserted item successfully")
})

//======================
// School Page APIs
//======================

//read to-do list
app.get('/termproject/api/school/getall', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getAllSchoolData();
    db.updateStatReport("school_getall");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//get by id
app.get('/termproject/api/school/get/:id', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getSchoolDataById(req.params.id);
    db.updateStatReport("school_get");

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

//delete by id
app.delete('/termproject/api/school/delete/:id', (req, res) => {

    const db = databaseInstance.getDatabaseInstance();

    const result = db.deleteSchoolTableRow(req.params.id);
    db.updateStatReport("school_delete");

    result
        .then(data => res.json({success : data}))
        .catch(err => console.log(err));
    res.send("delete request complete")
})

//update
app.patch('/termproject/api/school/update/:id/:name/:item', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.updateSchool(req.params.id, req.params.name, req.params.item);
    db.updateStatReport("school_update");

    result
        .then(data => res.json({success: data}))
        .catch(err => console.log(err))
    res.send("updated values successfully")
});

//post
app.post('/termproject/api/school/insert/:name/:item', (req, res) => {

    const db = databaseInstance.getDatabaseInstance();


    const result = db.insertNewSchool(req.params.name, req.params.item);
    db.updateStatReport("school_insert");

    result
        .then(data => res.json({data: data}))
        .catch(err => console.log(err))
    res.send("inserted item successfully")
})
//======================
// Admin Page
//======================

//read stat data
app.get('/getstats', (req, res) => {
    const db = databaseInstance.getDatabaseInstance();

    const result = db.getStatData();

    result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));
})

app.listen(8000, () => console.log("app is running"))