# Coaching Website
## 🚀 Overview
This project is a full-stack web application designed for a coaching institute. It provides a user-friendly public interface for students to browse and register for courses, along with a secure, administrator-only panel to manage student leads generated through the registration process.

## ✨ Features
Student-Facing Interface: A responsive and modern website for exploring course offerings.

Online Registration: Students can easily sign up for a course, generating a new lead for the institute.

Secure Admin Panel: A dashboard protected by JWT-based authentication for administrators.

Lead Management: Admins can view, track, and manage all student registrations.

Decoupled Architecture: A clean separation between the Next.js frontend and the Node.js/Express backend.

## 🛠️ Tech Stack
This project is built using a modern JavaScript ecosystem, focusing on a MERN stack with Next.js for a powerful, full-stack experience.

### Frontend
Framework: Next.js, React.js

Language: TypeScript

Styling: Tailwind CSS, Shadcn UI

UI/Animations: Framer Motion

Icons: Lucide React

Form Handling: React Hook Form

HTTP Client: Axios

Notifications: Sonner

### Backend
Runtime: Node.js, Express.js

### Database: MongoDB, Mongoose

Authentication: JSON Web Tokens (jsonwebtoken)

### Utilities: cors, dotenv, express-async-handler

## 📂 Folder Structure
The project is structured with a root directory (academy/) containing separate folders for the frontend and backend.

academy/


├── frontend/
│   ├── app/
│   ├── components/
│   ├── components.json
│   ├── data/
│   ├── lib/
│   ├── LICENSE
│   ├── next.config.mjs
│   ├── next-env.d.ts
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── public/
│   ├── tailwind.config.ts
│   └── tsconfig.json



└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    ├── routes/
    ├── server.js
    └── utils/

## 🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Node.js: The latest LTS version is recommended.

npm or yarn: A package manager for installing dependencies.

MongoDB: A running instance, either local or via a service like MongoDB Atlas.

### 1. Environment Variables
Create the necessary environment files and configure them.

frontend/.env.local

NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api

## backend/.env

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
ADMIN_EMAIL=your_admin_email@example.com
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret

## 2. Installation
Navigate to each directory and install the dependencies.

### Install frontend dependencies
cd frontend
npm install

### Install backend dependencies
cd ../backend
npm install

## 3. Running the Servers
Start the backend server first, then the frontend.

### Start the backend server
cd backend
npm run dev

### Open a new terminal and start the frontend development server
cd frontend
npm run dev

The frontend should be available at http://localhost:3000 and the backend API at http://localhost:5000.

## 📝 License
This project is licensed under the MIT License. For more information, please see the LICENSE file in the repository.

## 🗓️ Future Plans
Deployment: Add detailed instructions for deploying the frontend and backend.

API Documentation: Auto-generate and include API endpoint documentation.
