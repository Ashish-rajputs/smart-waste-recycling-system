# Smart Waste Recycling System — Service Design

## 1. Project Overview

The Smart Waste Recycling System helps users request waste collection
and allows the system to manage recyclable waste categories and pickup requests.

## 2. Main Capabilities

1. Browse available waste categories.
2. Request a waste pickup.
3. View all pickup requests.
4. View a specific pickup request.
5. Update pickup status.
6. Cancel a pickup request.

## 3. Service Architecture

### Waste Service

Responsibility:
- Retrieve available waste categories from MySQL.

Endpoint:
- GET /api/waste-categories

### Pickup Service

Responsibility:
- Create pickup requests.
- Retrieve all pickup requests.
- Retrieve a specific pickup request.
- Update pickup status.
- Cancel eligible pickup requests.

Planned endpoints:
- POST /api/pickups
- GET /api/pickups
- GET /api/pickups/{id}
- PATCH /api/pickups/{id}
- DELETE /api/pickups/{id}

## 4. Current Implementation Status

| Feature | Status |
|---|---|
| Home endpoint | Implemented |
| Get waste categories | Implemented |
| Create pickup request | Implemented |
| Get all pickup requests | Implemented |
| Get pickup by ID | Planned |
| Update pickup status | Planned |
| Cancel pickup | Planned |

## 5. Technology Stack

- Backend: Node.js
- Web framework: Express.js
- Database: MySQL
- Database driver: mysql2
- API format: REST
- Data exchange format: JSON

## 6. Database Entities

### Waste Categories

- id: Primary key
- name: Unique waste category name

### Pickups

- id: Primary key
- user_id: User requesting pickup
- waste_category_id: Foreign key referencing waste_categories.id
- quantity_kg: Waste quantity in kilograms
- address: Collection address
- status: Pickup status
- created_at: Request creation timestamp

## 7. Service Contract — Waste Categories

Operation: Get all waste categories

Method: GET

Endpoint: /api/waste-categories

Success response:
- HTTP 200 OK
- Content-Type: application/json

Example response:

{
  "success": true,
  "count": 4,
  "categories": [
    {"id": 1, "name": "plastic"},
    {"id": 2, "name": "paper"},
    {"id": 3, "name": "metal"},
    {"id": 4, "name": "glass"}
  ]
}

Server error:
- HTTP 500 Internal Server Error
- Returned when the database query fails.