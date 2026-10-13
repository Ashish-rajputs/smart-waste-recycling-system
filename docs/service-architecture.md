# Smart Waste Recycling System — Service Architecture

## Architecture Diagram

```mermaid
flowchart TD
    U[User / Client]
    API[Express Server - REST API]
    WS[Waste Category Route]
    PS[Pickup Request Routes]
    DB[(MySQL Database)]
    WC[waste_categories Table]
    P[pickups Table]

    U -->|HTTP Requests / JSON| API
    API --> WS
    API --> PS
    WS -->|SQL Query| DB
    PS -->|SQL Queries| DB
    DB --> WC
    DB --> P
