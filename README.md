# Blood Bank Management System (BBMS)

<div align="center">

![BBMS Banner](https://img.shields.io/badge/Blood%20Bank-Management%20System-red?style=for-the-badge&logo=heart&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat-square&logo=jsonwebtokens)

**A full-stack web platform built to modernize blood bank operations across hospitals and donation centers.**

</div>

---

## Overview

The **Blood Bank Management System (BBMS)** is a web-based platform designed to streamline the management of blood donations, hospital requests, and inventory tracking. By replacing manual processes with a structured digital workflow, BBMS enables hospitals and blood banks to access real-time inventory, maintain donor records, and process blood requests efficiently.

---

## The Problem

Many blood banks still rely on manual documentation, scattered information, and slow communication methods. This leads to:

- ❌ No real-time visibility of blood availability
- ❌ Delays during emergency blood requirements
- ❌ Frequent data entry errors
- ❌ Difficulty managing donors, patients, and hospital requests
- ❌ Lack of a centralized system connecting all operations

These limitations reduce the efficiency and reliability of blood bank operations — sometimes at the cost of lives.

---

## Our Solution

BBMS provides an **all-in-one, centralized, and secure system** that handles all operations digitally:

- ✅ Donor registration and profile management
- ✅ Hospital blood request creation and real-time status tracking
- ✅ Live inventory monitoring by blood group and unit count
- ✅ Role-based secure authentication using JWT
- ✅ Fully structured RESTful backend APIs
- ✅ Clean, responsive frontend interface for hospitals, donors, and admins

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js 19 | UI framework |
| React Router v7 | Client-side routing |
| Axios | HTTP requests |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Server runtime |
| Express.js | REST API framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Swagger | API documentation |

---

## Screenshots

**Login Page**

<img width="1920" height="970" alt="Login Page" src="https://github.com/user-attachments/assets/b7796043-c68d-4dda-8203-0be6b79ee5c0" />

**Admin Dashboard**

<img width="1920" height="1257" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/08f36872-ee09-4716-a66a-316aa1c763d5" />

**Donor Dashboard**

<img width="1732" height="1536" alt="Donor Dashboard" src="https://github.com/user-attachments/assets/9d715e70-c930-4f00-b8f4-0e28d43ee07e" />

**Manage Requests**

<img width="1920" height="1518" alt="Manage Requests" src="https://github.com/user-attachments/assets/7aafa2aa-d2d4-4f20-982b-136de08df71a" />

**Inventory Overview**

<img width="1920" height="1121" alt="Inventory Overview" src="https://github.com/user-attachments/assets/65110412-2e41-4c0f-824d-7ee9ebed91bb" />

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm
- MongoDB (local or Atlas)
- Docker Desktop *(optional)*

---

### Clone the Repository

```bash
git clone https://github.com/PRASANTH8220/BLOOD_BANK_MANAGEMENT_SYSTEM.git
cd BLOOD_BANK_MANAGEMENT_SYSTEM
```

---

### 💻 Option 1: Manual Setup

#### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Seed Admin Account (First Time Only)

Before starting the server, create the admin user:

1. Open `backend/seedAdmin.js`
2. Update the admin credentials inside the file
3. Run the seed script:

```bash
node seedAdmin.js
```

This creates the admin account in your database.

#### Start the Backend

```bash
npm start
```

#### Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at → `http://localhost:5173`  
Backend runs at → `http://localhost:5000`

---

### 🐳 Option 2: Run with Docker (Recommended)

Make sure **Docker Desktop** is installed and running.

```bash
docker compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |

Seed the admin user (if needed):

```bash
docker exec -it backend node seedAdmin.js
```

---

## API Documentation

Once the backend is running, access the Swagger UI at:

```
http://localhost:5000/api/doc
```

---

## Project Structure

```
BLOOD_BANK_MANAGEMENT_SYSTEM/
├── backend/
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── openapi/            # Swagger specs
│   ├── seedAdmin.js        # Admin seeder
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
└── frontend/
    ├── src/
    │   ├── assets/
    │   └── ...
    ├── public/
    └── index.html
```

---

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

---

## Author

**Prasanth** — [@PRASANTH8220](https://github.com/PRASANTH8220)

---

> Built with 🩸 to save lives — one unit at a time.