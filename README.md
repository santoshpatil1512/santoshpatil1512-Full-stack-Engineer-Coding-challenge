## Secret Santa Assigner 🎅🎁
The Secret Santa Assigner is a web application that automates the process of assigning Secret Santa pairs for a group of employees. It ensures that no employee is assigned to themselves and avoids repetitive assignments from previous years. The application is built using Node.js for the backend and React.js for the frontend, with Tailwind CSS for styling.

## Features
* CSV File Upload: Upload employee and previous assignment data via CSV files.

* Secret Santa Assignment: Automatically assign Secret Santa pairs based on the uploaded data.

* Validation: Ensures no employee is assigned to themselves and avoids repetitive assignments.

* Responsive UI: Clean and modern user interface built with Tailwind CSS.

* Error Handling: Proper error handling for invalid inputs or file uploads.

## Technologies Used
* Frontend: React.js, Tailwind CSS, Axios

* Backend: Node.js, Express.js, Multer, CSV Parser

* Development Tools: Vite, Git, Postman (for API testing)

## Installation
Follow these steps to set up and run the project locally.

## Prerequisites
* Node.js: Ensure Node.js is installed on your machine. Download it from here.

* Git: Ensure Git is installed. Download it from here.

## Steps

## Clone the Repository:

## git clone https://github.com/santoshpatil1512/santoshpatil1512-Full-stack-Engineer-Coding-challenge.git
##  cd Task

## Set Up the Backend:

Navigate to the backend directory:

cd secret-santa_Backend

## Install dependencies:
npm install


## Create an uploads directory for storing uploaded files:

mkdir uploads


## Set Up the Frontend:

## Navigate to the frontend directory:

cd ../Santa_FrontEnd
Install dependencies:

npm install

## Environment Variables (Optional):

** If you need to configure environment variables (e.g., for email notifications), create a .env file in the backend directory.

## Running the Application
## Backend
## Start the backend server:

cd secret-santa_Backend
npm start

## The backend will run on http://localhost:5000.


## Frontend
Start the frontend development server:

## cd Santa_FrontEnd
npm run dev
## The frontend will run on http://localhost:5173.

## Open your browser and navigate to http://localhost:5173 to use the application.



## Usage
1. Upload CSV Files:

On the homepage, upload two CSV files:

Employees CSV: Contains the list of employees (columns: Employee_Name, Employee_EmailID).

Previous Assignments CSV: Contains previous year's assignments (columns: Employee_Name, Employee_EmailID, Secret_Child_Name, Secret_Child_EmailID).

2. Assign Secret Santa:

Click the Assign Secret Santa button to generate assignments.

3. View Assignments:

## Once the assignments are generated, they will be displayed in a list format.


## File Formats
** Employees CSV

Employee_Name,Employee_EmailID
Hamish Murray,hamish.murray@acme.com
Layla Graham,layla.graham@acme.com
Matthew King,matthew.king@acme.com

** Previous Assignments CSV
 Employee_Name,Employee_EmailID,Secret_Child_Name,Secret_Child_EmailID
Hamish Murray,hamish.murray@acme.com,Layla Graham,layla.graham@acme.com
Layla Graham,layla.graham@acme.com,Matthew King,matthew.king@acme.com

## API Endpoints
## POST /api/assign:

Uploads CSV files and generates Secret Santa assignments.

Request Body: multipart/form-data with two files (file and previousAssignmentsPath).

Response: JSON object containing the assignments.


## Acknowledgments
Tailwind CSS: For providing a utility-first CSS framework.

React.js: For building a dynamic and responsive frontend.

Node.js: For creating a robust backend.



## Contact
For questions or feedback, feel free to reach out:

Email: your-santoshmpatil1512@gmail.com

GitHub: santoshpatil1512

## Enjoy using the Secret Santa Assigner! 🎅🎁

## Let me know if you need further assistance! 😊