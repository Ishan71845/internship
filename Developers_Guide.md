👨‍💻 Developer's Guide
This document serves as a technical reference for developers who need to understand, modify, or extend the backend of the Coaching Website project.

📂 Backend Folder Structure
The backend is organized to follow a clear MVC (Model-View-Controller) pattern, with separate directories for each logical component.

backend/
├── config/             # Configuration files (e.g., database connection)
├── controllers/        # Business logic for each route
├── middleware/         # Custom middleware (e.g., authentication)
├── models/             # Mongoose schemas for database collections
├── routes/             # API endpoint definitions
├── server.js           # Main application entry point
├── utils/              # Helper functions (e.g., token generation)
└── .env                # Environment variables

🌐 API Endpoints
All API endpoints are prefixed with /api. The following table lists the core endpoints, their HTTP methods, and their purpose.

Method

Endpoint

Description

Access

POST

/api/admin/login

Authenticates an admin user and returns a JWT token.

Public

GET

/api/admin/leads

Retrieves a list of all student leads.

Protected - Admin Only

GET

/api/courses/courses

Fetches all available courses.

Public

GET

/api/faculty/faculty

Fetches a list of all faculty members.

Public

POST

/api/leads/create-lead

Creates a new student lead from the registration form.

Public

GET

/api/leads/leads

Fetches a list of all student leads.

Protected - Admin Only

DELETE

/api/leads/:id

Deletes a specific student lead by ID.

Protected - Admin Only

GET

/api/results/results

Fetches a list of all student results.

Public

GET

/api/testimonials/testimonials

Fetches a list of all student testimonials.

Public

🔒 Authentication
The backend uses JSON Web Tokens (JWTs) for authentication. The authentication flow is as follows:

Admin Login: An admin sends a POST request to /api/admin/login with their email and password.

Token Generation: If the credentials are valid, the server generates a JWT using the utils/generateToken.js function. The token payload includes the admin's email and a role of 'admin'.

Token Storage: The generated JWT is returned to the client, which should store it securely (e.g., in localStorage or a cookie).

Accessing Protected Routes: To access any protected endpoint (like /api/admin/leads), the client must include the JWT in the Authorization header of the request. The format must be Bearer <token>.

Middleware
The middleware/authMiddleware.js file contains the protect middleware, which verifies the JWT for protected routes. It checks for:

The presence of a Bearer token in the Authorization header.

The validity of the token using the JWT_SECRET.

The role in the token payload to ensure it is an admin.

📚 Database Schemas
The application uses MongoDB with Mongoose for data modeling. The following schemas define the structure of the data for each collection.

Admin
Stores administrator credentials.

email: String, required.

password: String, required.

Note: Passwords are hashed using bcryptjs before being saved to the database.

Course
Stores information about the courses offered.

title: String

description: String

duration: String

fee: String

Faculty
Stores details about the faculty members.

name: String, required.

subject: String

image: String (URL or path to image)

bio: String

Lead
Stores student registration information.

name: String

email: String

phone: String

course: String

createdAt: Date (default is Date.now)

Result
Stores the results of successful students.

studentName: String, required.

course: String

year: Number

rank: String

image: String (URL or path to image)

Testimonial
Stores student testimonials.

name: String, required.

message: String, required.

image: String (URL or path to image)

This guide should provide future developers with all the necessary information to confidently navigate and make changes to the backend codebase.