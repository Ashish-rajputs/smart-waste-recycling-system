const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'waste_app',
    password: 'WasteApp@2026Secure',
    database: 'smart_waste_recycling'
});

connection.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err.message);
        return;
    }

    console.log('Connected to MySQL database successfully!');
});

module.exports = connection;