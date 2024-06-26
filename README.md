# Hospital-Api

This project is an API for managing doctors and patients in a hospital, especially for the testing, quarantine, and well-being of COVID-19 patients. It allows doctors to register and log in, register patients, create patient reports, and retrieve patient reports based on different criteria.

Setup
Clone the repository:

git clone https://github.com/srikanth141199/Hospital-Api

**Install dependencies:**
npm install

**Set up environment variables:**
Create a .env file in the root directory.
Add the following variables to the .env file:

*PORT=3000
*MONGODB_URI=mongodb://localhost:27017/hospital
*JWT_SECRET=your_secret_key


**Start the server:**

node index.js/ nodemon index.js

**API Endpoints**

***Doctors***
POST /doctors/register: Register a new doctor with username and password.
POST /doctors/login: Login and get a JWT token.

***Patients***
POST /patients/register: Register a new patient.
POST /patients/:id/create_report: Create a report for a patient.
GET /patients/:id/all_reports: Get all reports of a patient (oldest to latest).

***Reports***
GET /reports/:status: Get all reports of all patients filtered by a specific status.

**Authentication**

JWT is used for authentication.
Routes /patients/register, /patients/:id/create_report, and /patients/:id/all_reports are protected and require a valid JWT token in the Authorization header.


**Folder Structure**

```javascript
hospital-api/
├── controllers/
│   ├── doctorController.js
│   ├── patientController.js
│   └── reportController.js
├── models/
│   ├── doctorModel.js
│   ├── patientModel.js
│   └── reportModel.js
├── routes/
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   └── reportRoutes.js
├── .env
├── app.js
└── README.md
```
**Tech Stack**

*Node.js
*MongoDB
*Express.js
*JWT for authentication