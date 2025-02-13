# Kraken Project

## 📌 Overview
The **Kraken Project** is a full-stack application built with **Angular 18** (Frontend) and **NestJS** (Backend). It allows users to import data from an **Excel file**, process it, and store it in a **MongoDB** database. The project follows a monorepo structure where both the frontend and backend are contained in a single repository and is fully containerized using **Docker**.

## 🚀 Features
### 🔹 Frontend (kraken-front)
- Import data from an **Excel file**.
- Validate and normalize data before sending it to the backend.
- Provide a user-friendly interface for data visualization.
- Communicate with the backend via **REST API**.

### 🔹 Backend (kraken-backend)
- Process and store the imported data in **MongoDB**.
- Ensure data integrity (replace negative prices with `0`, enforce unique names).
- Expose a **REST API** for data management.
- Secure data transactions (OAuth2 authentication planned).

## 🏗️ Tech Stack
- **Frontend**: Angular 18, TypeScript, XLSX.js
- **Backend**: NestJS, TypeScript, Mongoose, MongoDB
- **Containerization**: Docker, Docker Compose
- **Authentication (Planned)**: OAuth2

## 🏗️ Project Structure (Monorepo)
```
kraken-project/
│── frontend/    # Angular 18 Frontend
│── backend/     # NestJS Backend
│── docker-compose.yml  # Container Orchestration
│── README.md  # Project Documentation
```

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/kraken-project.git
cd kraken-project
```

### 2️⃣ Install Dependencies
#### 🔹 Frontend (frontend)
```sh
cd kraken-front
npm install
```
#### 🔹 Backend (backend)
```sh
cd ../kraken-backend
npm install
```

### 3️⃣ Environment Configuration
Create **.env** files inside each project.
#### 🔹 Backend (backend/.env)
```sh
MONGO_URI=mongodb://mongodb:27017/kraken
PORT=3000
```

### 4️⃣ Run the Application
#### 🔹 With Node.js (Development Mode)
```sh
# Start the backend
cd kraken-backend
npm run start

# Start the frontend
cd ../kraken-front
ng serve
```

#### 🔹 With Docker (Production Mode)
```sh
docker-compose up -d
```
This starts:
- **MongoDB** (Database)
- **NestJS API** (Backend)
- **Angular UI** (Frontend)

## 🔗 API Endpoints
### 📌 Import Data (Excel -> JSON -> MongoDB)
**POST `/kraken`** – Import structured data into the database
```json
[
  {
    "name": "Joint",
    "updated_at": "2025-09-14",
    "prices": [2, 8, 4],
    "rate": 10,
    "category": "product"
  }
]
```

### 📌 Retrieve Stored Data
**GET `/kraken`** – Fetch all stored records
```json
[
  {
    "name": "Joint",
    "updated_at": "2025-09-14",
    "prices": [2, 8, 4],
    "rate": 10,
    "category": "product"
  }
]
```


