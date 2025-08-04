Coaching Website


🚀 Overview
This project is a full-stack web application for a coaching institute. The website allows students to browse courses and register online, while an integrated admin panel provides administrators with a comprehensive tool to manage new student registrations (leads).

✨ Features
Student Registration: A user-friendly interface for students to explore available courses and register for their chosen program.

Secure Admin Panel: A protected dashboard where administrators can view, manage, and track all incoming student leads.

Responsive Design: Built with modern web technologies to ensure a seamless experience on all devices, from desktops to mobile phones.

API-Driven: A decoupled frontend and backend architecture for efficient and scalable development.

🛠️ Tech Stack
This project is built using a modern MERN (MongoDB, Express, React, Node.js) stack, with Next.js for server-side rendering and a strong focus on developer experience.

Frontend
Framework: Next.js, React.js

Language: TypeScript

Styling: Tailwind CSS, Shadcn UI

UI/Animations: Framer Motion

Icons: Lucide React

Forms: React Hook Form

HTTP Client: Axios

Notifications: Sonner

Backend
Runtime: Node.js

Framework: Express.js

Database: MongoDB, Mongoose

Authentication: JSON Web Tokens (jsonwebtoken)

Utilities: cors, dotenv, express-async-handler

📂 Folder Structure
The project is organized into two main directories: frontend for the Next.js application and backend for the Node.js API.

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
│   ├── README.md
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

🚀 Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Node.js (LTS version recommended)

npm or yarn

A MongoDB Atlas account or a local MongoDB instance

1. Environment Variables
Create the necessary environment files and populate them with your configuration.

frontend/.env.local

NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api

backend/.env

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
ADMIN_EMAIL=your_admin_email@example.com
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret

Note: Replace the placeholder values with your actual credentials and settings.

2. Installation
Navigate to each directory and install the required dependencies.

# Navigate to the frontend directory
cd frontend
npm install

# Navigate to the backend directory
cd ../backend
npm install

3. Running the Servers
Start the backend server first, then the frontend.

# Start the backend server
cd backend
npm run dev # or npm start

# Open a new terminal and start the frontend development server
cd frontend
npm run dev

The frontend will be accessible at http://localhost:3000 (by default) and the backend API will be available at http://localhost:5000 (or the port you specified).

📝 License
This project is licensed under the MIT License. See the LICENSE file for more details.

🗓️ Future Plans
Deployment: The project is yet to be deployed. Deployment instructions will be added to this README in the future.

API Documentation: API endpoints will be auto-generated from the codebase and documented for easy reference.