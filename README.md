# 🩸 Blood Bank Management System — Localhost Setup

A full-stack web app for managing blood bank operations: donors, hospitals, blood labs, and admins.

---

## 🛠 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 19 + Vite + Tailwind CSS v4   |
| Backend   | Node.js + Express 5                 |
| Database  | MongoDB (local)                     |
| Auth      | JWT (jsonwebtoken + bcryptjs)        |

---

## 📋 Prerequisites

Make sure you have these installed:

- **Node.js** v18+ → https://nodejs.org
- **MongoDB Community** (running locally on port 27017) → https://www.mongodb.com/try/download/community
- **npm** (comes with Node.js)

---

## 🚀 Quick Start

### 1. Start MongoDB

```bash
# macOS/Linux
mongod --dbpath /data/db

# Windows
"C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe"

# Or if installed as a service, it may already be running
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Copy `.env` (already included) and verify values:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/blood_bank_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

Seed the admin account (run once):
```bash
npm run seed
```
This creates: **admin@bbms.com** / **Admin@1234**

Start the backend:
```bash
npm run dev     # with auto-reload (nodemon)
# or
npm start       # plain node
```

Backend runs on → **http://localhost:5000**

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on → **http://localhost:5173**

---

## 🔑 Default Accounts

| Role      | Email              | Password    | Notes                            |
|-----------|--------------------|-------------|----------------------------------|
| Admin     | admin@bbms.com     | Admin@1234  | Created by `npm run seed`        |
| Donor     | *(register)*       | your choice | Register at `/register/donor`    |
| Hospital  | *(register)*       | your choice | Register at `/register/facility` |
| Blood Lab | *(register)*       | your choice | Register at `/register/facility` |

> ⚠️ Hospital and Blood Lab accounts require **admin approval** before login.

---

## 🗺 Frontend Routes

### Public
| Path                  | Description              |
|-----------------------|--------------------------|
| `/`                   | Landing page             |
| `/login`              | Login (all roles)        |
| `/register/donor`     | Donor registration       |
| `/register/facility`  | Hospital / Blood Lab reg |
| `/about`              | About page               |
| `/contact`            | Contact page             |

### Donor Dashboard (JWT protected)
| Path              | Description           |
|-------------------|-----------------------|
| `/donor`          | Donor dashboard       |
| `/donor/profile`  | Donor profile         |
| `/donor/camps`    | Available blood camps |
| `/donor/history`  | Donation history      |

### Hospital Dashboard (JWT protected)
| Path                               | Description            |
|------------------------------------|------------------------|
| `/hospital`                        | Hospital dashboard     |
| `/hospital/blood-request-create`   | Create blood request   |
| `/hospital/blood-request-history`  | Request history        |
| `/hospital/inventory`              | Blood stock view       |
| `/hospital/donors`                 | Donor directory        |

### Blood Lab Dashboard (JWT protected)
| Path              | Description           |
|-------------------|-----------------------|
| `/lab`            | Lab dashboard         |
| `/lab/inventory`  | Blood stock           |
| `/lab/camps`      | Manage blood camps    |
| `/lab/profile`    | Lab profile           |
| `/lab/requests`   | Blood requests        |
| `/lab/donor`      | Donor search/records  |

### Admin Dashboard (JWT protected)
| Path                   | Description              |
|------------------------|--------------------------|
| `/admin`               | Admin dashboard          |
| `/admin/verification`  | Approve/reject facilities|
| `/admin/donors`        | All donors               |
| `/admin/facilities`    | All facilities           |

---

## 📡 Backend API Routes

Base URL: `http://localhost:5000`

### Auth  `/api/auth`
| Method | Path        | Auth | Description         |
|--------|-------------|------|---------------------|
| POST   | /register   | No   | Register any role   |
| POST   | /login      | No   | Login (all roles)   |
| GET    | /profile    | JWT  | Get own profile     |

### Donor  `/api/donor`
| Method | Path     | Auth  | Description          |
|--------|----------|-------|----------------------|
| GET    | /profile | Donor | Get donor profile    |
| PUT    | /profile | Donor | Update profile       |
| GET    | /camps   | Donor | List blood camps     |
| GET    | /history | Donor | Donation history     |
| GET    | /stats   | Donor | Donation stats       |

### Facility  `/api/facility`
| Method | Path       | Auth     | Description            |
|--------|------------|----------|------------------------|
| GET    | /dashboard | Facility | Dashboard stats        |
| GET    | /profile   | Facility | Facility profile       |
| PUT    | /profile   | Facility | Update profile         |
| GET    | /labs      | Facility | List all labs          |

### Blood Lab  `/api/blood-lab`
| Method | Path                   | Auth | Description              |
|--------|------------------------|------|--------------------------|
| GET    | /dashboard             | Lab  | Lab dashboard stats      |
| GET    | /history               | Lab  | Activity history         |
| POST   | /camps                 | Lab  | Create camp              |
| GET    | /camps                 | Lab  | List camps               |
| PUT    | /camps/:id             | Lab  | Update camp              |
| PATCH  | /camps/:id/status      | Lab  | Update camp status       |
| DELETE | /camps/:id             | Lab  | Delete camp              |
| POST   | /blood/add             | Lab  | Add blood stock          |
| POST   | /blood/remove          | Lab  | Remove blood stock       |
| GET    | /blood/stock           | Lab  | View blood stock         |
| GET    | /blood/requests        | Lab  | View blood requests      |
| PUT    | /blood/requests/:id    | Lab  | Update request status    |
| GET    | /labs                  | Lab  | All labs list            |
| GET    | /donors/search         | Lab  | Search donors            |
| POST   | /donors/donate/:id     | Lab  | Mark donation            |
| GET    | /donations/recent      | Lab  | Recent donations         |

### Hospital  `/api/hospital`
| Method | Path                  | Auth     | Description            |
|--------|-----------------------|----------|------------------------|
| POST   | /blood/request        | Hospital | Request blood          |
| GET    | /blood/requests       | Hospital | View own requests      |
| GET    | /dashboard            | Hospital | Dashboard stats        |
| GET    | /blood/stock          | Hospital | Blood stock            |
| GET    | /history              | Hospital | Activity history       |
| GET    | /donors               | Hospital | Donor directory        |
| POST   | /donors/:id/contact   | Hospital | Log contact attempt    |

### Admin  `/api/admin`
| Method | Path                    | Auth  | Description              |
|--------|-------------------------|-------|--------------------------|
| GET    | /facilities             | Admin | All facilities           |
| PUT    | /facility/approve/:id   | Admin | Approve facility         |
| PUT    | /facility/reject/:id    | Admin | Reject facility          |
| GET    | /dashboard              | Admin | Dashboard stats          |
| GET    | /donors                 | Admin | All donors               |

---

## ⚠️ Known Issues & Notes

1. **`campRoutes.js` and `hospital.js`** — These older route files are in `_legacy/` folder. They use a different middleware pattern and are NOT active. Do not import them.

2. **`authentication.js`** — Duplicate auth router (also in `_legacy/`). The active one is `authRoutes.js` → `authContoller.js`.

3. **Facility approval** — Hospitals and Blood Labs must be approved by the admin before they can log in.

4. **JWT is stored in localStorage** — This is fine for development. For production, consider httpOnly cookies.

5. **Password security** — All passwords are bcrypt-hashed via Mongoose pre-save hooks.

---

## 📁 Project Structure

```
BBMS_LOCAL/
├── backend/
│   ├── _legacy/          ← Old/unused route files (safe to ignore)
│   ├── config/db.js
│   ├── controllers/      ← Business logic
│   ├── middlewares/      ← JWT auth middleware (3 variants)
│   ├── models/           ← Mongoose schemas
│   ├── routes/           ← Active API routes
│   ├── seedAdmin.js      ← Run once to create admin
│   ├── server.js         ← Entry point
│   └── .env              ← Local config
├── frontend/
│   ├── src/
│   │   ├── App.jsx       ← All frontend routes defined here
│   │   ├── pages/        ← Route components
│   │   ├── components/   ← Shared UI components
│   │   └── utils/        ← Auth helpers
│   ├── vite.config.js
│   └── .env              ← VITE_API_URL etc.
└── README.md
```
