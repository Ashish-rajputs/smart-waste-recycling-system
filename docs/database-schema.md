# Smart Waste Recycling System — Database Schema

## 1. Database Information

Database name: smart_waste_recycling

Database: MySQL

## 2. Table: waste_categories

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique category ID |
| name | VARCHAR(50) | NOT NULL, UNIQUE | Waste category name |

Example records:

| id | name |
|---|---|
| 1 | plastic |
| 2 | paper |
| 3 | metal |
| 4 | glass |

## 3. Table: pickups

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique pickup ID |
| user_id | INT | NOT NULL | ID of the requesting user |
| waste_category_id | INT | FOREIGN KEY, NOT NULL | Selected waste category |
| quantity_kg | DECIMAL(8,2) | NOT NULL | Quantity of waste in kilograms |
| address | VARCHAR(255) | NOT NULL | Pickup location |
| status | VARCHAR(30) | NOT NULL, DEFAULT 'Pending' | Current pickup status |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation time |

## 4. Relationship

One waste category can be associated with multiple pickup requests.

Relationship:

waste_categories (1) -------- (N) pickups

Foreign key:

pickups.waste_category_id references waste_categories.id

## 5. Important Design Notes

1. Primary keys uniquely identify records.
2. AUTO_INCREMENT generates IDs automatically.
3. The UNIQUE constraint prevents duplicate category names.
4. The foreign key maintains referential integrity between categories and pickups.
5. quantity_kg uses DECIMAL(8,2) to store fractional quantities accurately.
6. user_id currently does not reference a users table because that table has not yet been created.

## 6. Future Improvements

- Create a users table.
- Add a foreign key from pickups.user_id to users.id.
- Restrict pickup status to approved values.
- Add request validation in the API.
- Add indexes where query performance requires them.