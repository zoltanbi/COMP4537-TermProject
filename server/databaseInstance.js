const mysql = require('mysql');
let instance = null;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "termproject",
    port: "3306"
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    //console.log('db' + connection.state);
});

class DatabaseInstance {
    static getDatabaseInstance() {
        return instance ? instance : new DatabaseInstance();
    }

//returns all data
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM list;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

//returns data by id
    async getDataById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM list WHERE id = ?";

                connection.query(query, id, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

//updates an ID in the stat table
    async updateStatReport(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE stat_report SET stat = stat + 1 WHERE id = ?";

                connection.query(query, id, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });

            //console.log(response);
            return response === 1 ? true : false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

//returns all stat data
    async getStatData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM stat_report;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            //console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = DatabaseInstance;