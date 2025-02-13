# Kraken Backend

## 📌 Overview
The **Kraken Backend** is a **NestJS** application that processes and stores imported data from an **Excel file**. It provides a **REST API** that receives formatted data from the frontend, ensures data consistency, and saves it in a **MongoDB** database. The backend is built with scalability in mind and can be deployed using **Docker**.

## 🚀 Features
- **Data Normalization**: Cleans and structures imported data (e.g., replaces negative prices with `0`).
- **MongoDB Integration**: Stores and updates data efficiently, ensuring uniqueness based on the `name` field.
- **REST API**: Provides endpoints for data import and retrieval.
- **Docker Support**: Containerized for easy deployment and scalability.
- **Security (Future Enhancement)**: OAuth2 authentication to restrict access to authorized users.

## 🛠️ Tech Stack
- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Validation**: `class-validator`, `class-transformer`
- **ORM**: `mongoose`
- **Containerization**: Docker, Docker Compose

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ibrahim87/kraken-project
cd kraken-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Environment Configuration
Create a **.env** file in the root directory and add the following:
```sh
MONGO_URI=mongodb://localhost:27017/kraken
PORT=3000
```

### 4️⃣ Run the Application
#### With Node.js
```sh
npm run start
```
#### With Docker
```sh
docker-compose up -d
```

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

## 🐳 Deployment with Docker
To run the application in a **Docker environment**, use:
```sh
docker-compose up -d
```
This will start:
- **MongoDB** (database)
- **NestJS API** (backend service)


