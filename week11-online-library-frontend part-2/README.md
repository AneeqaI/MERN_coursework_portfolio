# Week 10 – MERN Backend Development with REST API

This task focuses on developing the backend of a MERN (MongoDB, Express, React, Node.js) application by implementing a RESTful API for an online library system. The objective of the lab was to design and implement server-side functionality that supports full CRUD (Create, Read, Update, Delete) operations on a MongoDB database and exposes these operations through HTTP endpoints.

## Technologies Used
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Visual Studio Code

## Task Overview
- Initialised a Node.js backend application using npm
- Installed and configured Express, Mongoose, MongoDB, and CORS
- Designed a MongoDB schema and model to represent book data
- Implemented a dedicated database connection module using Mongoose
- Developed a REST API server to handle client requests
- Implemented CRUD operations for managing books in the database
- Used asynchronous programming with `async/await` and Promises
- Tested API endpoints locally to verify correct database interaction

## REST API Endpoints Implemented
- `GET /allbooks` – Retrieve all books from the database
- `GET /getbook/:id` – Retrieve a single book by its unique ID
- `POST /addbooks` – Add a new book to the database
- `POST /updatebook/:id` – Update an existing book by ID
- `POST /deleteBook/:id` – Delete a book by ID

## Database Design
The MongoDB database stores book records with the following attributes:
- `booktitle`
- `PubYear`
- `author`
- `Topic`
- `formate`

Each record is automatically assigned a unique `_id` by MongoDB, which is used to identify and update individual documents.

## Files Included
- `Server.js` – Main Express server file defining REST API endpoints
- `BooksSchema.js` – Mongoose schema and model for book data
- `MongoDBConnect.js` – Database connection configuration using Mongoose
- `package.json` – Project configuration and dependencies

## Evidence
- All backend source files implementing the REST API are included in this directory
- CRUD operations were verified using MongoDB Compass and API requests
- Screenshots demonstrating successful API responses and database updates are included in the Word portfolio
