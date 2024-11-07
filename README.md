# Driva Loan App

Driva Loan App is a full-stack application designed to manage loan enquiries. It includes a React frontend and an Express backend, with TypeScript used throughout the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

### Prerequisites
- [Node18] 
- [npm]
- [git]

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/driva-loan-app.git
   cd driva-loan-app
   ```
2. Install dependencies
   ```npm install```

## Usage

### Development
To start the development server, run: ```npm run start:dev```
This will concurrently start the Express server and the React development server.

### Production
To build the project for production, run: ```npm run build```
To start the production server, run: ```npm start``` 

Local server address:  http://localhost:3000/


## Scripts
* start: Start the production server.
* build: Build the project for production.
* dev: Start the development server using ts-node.
* start:dev: Concurrently start the Express server and React development server.
* server: Start the Express server with nodemon.
* server:build: Compile the TypeScript server code.
* client: Start the React development server.
* client:build: Build the React frontend for production.
* lint: run static code analysis
* format: starts formating code according to pritier configuration
* format:check : check formatting in code

## API Endpoints
POST /api/loan  - Submits a loan enquiry.

## Technologies Used
### Frontend:

The client is a single-page application (SPA) built with React. It uses React Router for navigation, React Hook Form for form handling, and Zod for schema validation. The client communicates with the backend server to submit loan enquiries and retrieve results.

* app.tsx - main entry point for the React application. It sets up the router and renders the appropriate components based on the current route.
* routes.tsx - this file defines the routes for the application using React Router.
* /pages - forlder that contains UI pages
* /pages/loan-form.tsx  - This file provides context and state management for the form data. Main container for other pages.
* /api/loanService.ts - Provides communicates with the backend server.

### Backend:

The server is built with Express and TypeScript. It handles API requests for loan enquiries, serves the React frontend, and provides middleware for logging and error handling and input validation.

* server.ts - This is the main entry point for the Express server. It sets up middleware, serves static files, and defines error-handling middleware.
* server/routes.ts - Defines the routes for the server, including API endpoints and catch-all handlers for serving the React app and handling unknown routes.
* server/services/loanService.ts - contains the logic for handling loan enquiries and calculating loan results.
* server/core/dataValidation.ts - middleware for validating incoming loan enquiry requests.


/common/ folder is shared between client and server sides. Contains schema type validation and  defines interfaces.
