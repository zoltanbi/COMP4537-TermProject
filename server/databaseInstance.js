const mysql = require('mysql');
let instance = null;

const connection = mysql.createConnection({
    host: "localhost",
    user: "zoltanbi_termproject",
    password: "termproject",
    database: "zoltanbi_termproject",
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

//===============================
// Personal Todo List
//===============================

    async getAllPersonalData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM personal_list;";

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

    async insertNewPersonal(name, item) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO personal_list (name, item) VALUES (?, ?);";

                connection.query(query, [name, item], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            //console.log(insertId);
            return {
                id: insertId,
                name: name,
                item: item
            };
        } catch (err) {
            console.log(err);
        }
    }

    async deletePersonalTableRow(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM personal_list WHERE id = ?;";

                connection.query(query, [id], (err, result) => {
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

    async updatePersonal(id, name, item) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE personal_list SET name = ?, item = ? WHERE id = ?";

                connection.query(query, [name, item, id], (err, result) => {
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

//===============================
// School Todo List
//===============================

    async getAllSchoolData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM school_list;";

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

    async insertNewSchool(name, item) {
        try {
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO school_list (name, item) VALUES (?, ?);";

                connection.query(query, [name, item], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            //console.log(insertId);
            return {
                id: insertId,
                name: name,
                item: item
            };
        } catch (err) {
            console.log(err);
        }
    }

    async deleteSchoolTableRow(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM school_list WHERE id = ?;";

                connection.query(query, [id], (err, result) => {
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

    async updateSchool(id, name, item) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE school_list SET name = ?, item = ? WHERE id = ?";

                connection.query(query, [name, item, id], (err, result) => {
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
//===============================
// API Specific
//===============================
    async getPersonalDataById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM personal_list WHERE id = ?;";

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

    async getSchoolDataById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM school_list WHERE id = ?;";

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
//===============================
// Stats Report
//===============================

//updates an ID in the stat table
    async updateStatReport(id) {
        try {
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