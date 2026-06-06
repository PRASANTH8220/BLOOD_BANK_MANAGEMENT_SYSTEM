# Blood Bank Management System (BBMS) — Backend

## Overview

The **Blood Bank Management System (BBMS)** backend is a secure and scalable REST API built to streamline blood donation management, hospital blood requests, and real-time inventory tracking. It serves as the backbone of the entire platform, connecting donors, hospitals, and blood bank administrators through a unified system.

## The Problem

Blood banks across India continue to struggle with outdated, fragmented workflows:

- No real-time visibility into blood stock availability
- Critical delays when hospitals raise emergency blood requests
- Manual data entry leading to frequent errors and mismatches
- No centralized system to coordinate donors, patients, and hospitals
- Poor traceability of blood units from donation to transfusion

## Our Solution

The BBMS backend provides a **centralized, secure, and well-documented API** that tackles these challenges head-on:

- **Donor registration and profile management**
- **Hospital blood request creation and status tracking**
- **Real-time blood inventory monitoring by group and unit**
- **Role-based secure authentication** using JWT
- **Clean RESTful API design** for easy frontend and third-party integration
- **Swagger API documentation** for quick reference and testing

Built for reliability and speed, the backend ensures that every blood request is handled efficiently, reducing response times and eliminating manual bottlenecks.

## Technologies Used

| Technology | Purpose |
|---|---|
| **Node.js** | Server-side runtime |
| **Express.js** | RESTful API framework |
| **MongoDB** | NoSQL database for flexible data storage |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure role-based authentication |
| **bcryptjs** | Password hashing |
| **Swagger** | Interactive API documentation |
| **Nodemon** | Development auto-restart |

## Getting Started

### Prerequisites

Make sure the following are installed on your machine:

- Node.js (v18+)
- npm
- MongoDB (local or Atlas cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd blood-bank-management-system/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables — copy `.env.example` and fill in your values:
   ```bash
   cp .env.example .env
   ```

5. Start the development server:
   ```bash
   npm start
   ```

### API Documentation

Once the server is running, access the interactive Swagger UI at:

```
http://localhost:5000/api/doc
```

All available endpoints, request bodies, and response schemas are documented there.

## Folder Structure

```
backend/
├── controllers/      # Route handler logic
├── middleware/       # Auth and error middleware
├── middlewares/      # Additional middleware
├── models/           # Mongoose schemas
├── routes/           # API route definitions
├── openapi/          # Swagger/OpenAPI specs
├── server.js         # Entry point
└── .env              # Environment variables
```

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port the server runs on |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |

---

> Built with ❤️ to save lives — one unit at a time.
