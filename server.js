const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

const PORT = 3000;

// ==========================================
// 1. HOME ROUTE
// ==========================================
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Smart Waste Recycling System',
        status: 'Server is running'
    });
});

// ==========================================
// 2. GET ALL WASTE CATEGORIES
// Fetch categories directly from MySQL
// ==========================================
app.get('/api/waste-categories', (req, res) => {
    const sql = `
        SELECT id, name
        FROM waste_categories
        ORDER BY id
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching waste categories:', err.message);

            return res.status(500).json({
                success: false,
                message: 'Failed to retrieve waste categories'
            });
        }

        res.status(200).json({
            success: true,
            count: results.length,
            categories: results
        });
    });
});

// ==========================================
// 3. CREATE A PICKUP REQUEST
// ==========================================
app.post('/api/pickups', (req, res) => {
    const { userId, wasteCategory, quantityKg, address } = req.body;

    const sql = `
        INSERT INTO pickups
        (user_id, waste_category_id, quantity_kg, address)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [userId, wasteCategory, quantityKg, address],
        (err, result) => {
            if (err) {
                console.error('Error creating pickup:', err.message);

                return res.status(500).json({
                    success: false,
                    message: 'Failed to create pickup request'
                });
            }

            res.status(201).json({
                success: true,
                message: 'Pickup request created successfully',
                pickup: {
                    id: result.insertId,
                    userId,
                    wasteCategory,
                    quantityKg,
                    address,
                    status: 'Pending'
                }
            });
        }
    );
});

// ==========================================
// 4. GET ALL PICKUP REQUESTS
// ==========================================
app.get('/api/pickups', (req, res) => {
    const sql = `
        SELECT
            id,
            user_id AS userId,
            waste_category_id AS wasteCategory,
            quantity_kg AS quantityKg,
            address,
            status,
            created_at AS createdAt
        FROM pickups
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching pickups:', err.message);

            return res.status(500).json({
                success: false,
                message: 'Failed to retrieve pickup requests'
            });
        }

        res.status(200).json({
            success: true,
            count: results.length,
            pickups: results
        });
    });
});

// ==========================================
// 5. START SERVER
// ==========================================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});