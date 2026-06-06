# Contributing to Blood Bank Management System (BBMS)

Thank you for your interest in contributing to this project!  
Every contribution — big or small — helps save lives. Follow the steps below to get started.

---

## 1. Fork the Repository

Click **"Fork"** on the top-right corner of the repository page.  
This creates your own personal copy of the project.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/PRASANTH8220/BLOOD_BANK_MANAGEMENT_SYSTEM.git
cd BLOOD_BANK_MANAGEMENT_SYSTEM
```

---

## 3. Add the Upstream Remote

This keeps your fork in sync with the original repo:

```bash
git remote add origin https://github.com/PRASANTH8220/BLOOD_BANK_MANAGEMENT_SYSTEM.git
git remote -v
```

---

## 4. Create a New Branch

Always work on a separate branch — never directly on `main`:

```bash
git checkout -b feature/your-feature-name
```

Example:
```bash
git checkout -b feature/donor-search-filter
```

---

## 5. Set Up the Project

### 🐳 Option 1: Run with Docker (Recommended)

Make sure **Docker Desktop** is installed and running.

```bash
docker compose up --build
```

Access the app:
- **Frontend** → http://localhost
- **Backend** → http://localhost:3000

Seed the admin user if needed:
```bash
docker exec -it backend node seedAdmin.js
```

---

### 💻 Option 2: Manual Setup (Without Docker)

**Backend:**
```bash
cd backend
npm install
npm start
```

**Frontend:**
```bash
cd ../frontend
npm install
npm run dev
```

---

## 6. Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 7. Make Your Changes

- Write clean, readable, well-commented code
- Follow the existing folder structure
- Test your changes before committing

---

## 8. Commit Your Changes

```bash
git add .
git commit -m "feat: add donor search filter by blood group"
```

**Commit message format:**

| Prefix | Use for |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation update |
| `refactor:` | Code restructure |
| `chore:` | Dependency or config update |

---

## 9. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then go to your fork on GitHub → click **"Compare & Pull Request"** → fill in a clear description of what you changed and why.

---

## 10. Contribution Rules

- ✅ Write clean, readable, and well-structured code
- ✅ Add comments wherever the logic isn't immediately obvious
- ✅ Use meaningful branch names and commit messages
- ✅ Describe your PR clearly — what changed and why
- ✅ Follow the existing folder structure of the project
- ❌ Do not push `.env` files or any sensitive credentials
- ❌ Do not push directly to the `main` branch
- ❌ Do not submit PRs with broken builds or failing functionality

---

## Project Structure (Quick Reference)

```
BLOOD_BANK_MANAGEMENT_SYSTEM/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    ├── public/
    └── index.html
```

---

Thank you for contributing — your effort directly helps build a system that saves lives. 🩸