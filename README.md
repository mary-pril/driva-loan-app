# Driva Loan App

Driva Loan App is a full-stack application designed to manage loan enquiries. It includes a React frontend and an Express backend, with TypeScript used throughout the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

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

## Scripts
start: Start the production server.
build: Build the project for production.
dev: Start the development server using ts-node.
start:dev: Concurrently start the Express server and React development server.
server: Start the Express server with nodemon.
server:build: Compile the TypeScript server code.
client: Start the React development server.
client:build: Build the React frontend for production.

## API Endpoints
POST /api/loan  - Submits a loan enquiry.

## Technologies Used
Frontend:

* React
* React Router
* React Hook Form
* Sass
* Zod

Backend:

* Express
* TypeScript
* Zod