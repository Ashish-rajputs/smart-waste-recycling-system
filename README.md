# Smart Waste Recycling System

## Overview

The Smart Waste Recycling System aims to make recyclable waste collection
easier by allowing users to submit waste details and request pickups.
It helps manage users, waste categories, collection requests, collectors,
and recycling rewards.

## Main Users

- **User:** Submits recyclable waste and requests collection.
- **Collector:** Collects waste and updates pickup status.
- **Admin:** Manages users, waste records, and collection activities.

## System Capabilities

1. Browse waste categories.
2. Request waste pickup.
3. View all pickup requests.
4. View a single pickup request.
5. Update pickup status.
6. Cancel pickup request.

## Planned Services

- **User Service:** Manages user information.
- **Waste Service:** Manages waste categories and waste records.
- **Pickup Service:** Creates, retrieves, updates, and cancels pickup requests.
- **Reward Service:** Manages recycling rewards.

## Project Documentation

- [Project Brief](docs/brief.md)
- [HTTP Request Log](docs/http-log.md)
- [Network Analysis](docs/network-analysis.md)

## Technology

- Git and GitHub
- HTTP and REST APIs
- Node.js
- Express.js
- MySQL
- mysql2 database driver

## Current Implementation

- Express.js server is running.
- MySQL database connection is working.
- Waste categories can be retrieved.
- Pickup requests can be created and retrieved using REST APIs.
- Pickup requests are stored in MySQL.