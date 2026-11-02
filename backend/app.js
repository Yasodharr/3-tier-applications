const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Check MySQL connection
db.connect((err) => {
    if (err) {
        console.log('Database connection failed:', err.message);
        return;
    }

    console.log('MySQL Database Connected Successfully!');
});

// Home API
app.get('/', (req, res) => {
    res.send('Employee Management System API is Running!');
});

// Get All Employees API
app.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM employees';

    db.query(sql, (err, results) => {
        if (err) {

            console.log(err.message);
            return res.status(500).json({
                message: 'Unable to fetch employees'
            });
        }

        res.json(results);
    });
});

// Add Employee API
app.post('/employees', (req, res) => {

    const { employee_id, name, email, department } = req.body;

    const sql = `
        INSERT INTO employees (employee_id, name, email, department)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [employee_id, name, email, department], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send('Employee save failed');
        }

        res.send('Employee added successfully!');
    });
});

// Start backend server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});