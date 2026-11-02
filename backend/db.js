const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yaso@2026',
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) {
        console.log('Database connection failed:', err.message);
        return;
    }

    console.log('MySQL Database Connected Successfully!');
});