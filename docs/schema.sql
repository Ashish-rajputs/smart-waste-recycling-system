-- Smart Waste Recycling System
-- Database Schema

CREATE DATABASE IF NOT EXISTS smart_waste_recycling;

USE smart_waste_recycling;

-- Table 1: Waste Categories
CREATE TABLE IF NOT EXISTS waste_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Table 2: Pickup Requests
CREATE TABLE IF NOT EXISTS pickups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waste_category_id INT NOT NULL,
    quantity_kg DECIMAL(8,2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_pickup_waste_category
        FOREIGN KEY (waste_category_id)
        REFERENCES waste_categories(id)
);

-- Initial Waste Categories
INSERT IGNORE INTO waste_categories (name)
VALUES
    ('plastic'),
    ('paper'),
    ('metal'),
    ('glass');
