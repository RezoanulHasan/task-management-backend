# Task Management Web Application
# Project Name: TaskHub
This project is a web application for managing tasks. It consists of a front-end interface built with React and a back-end server built with Node.js and Express. Tasks are stored in a MongoDB database to provide persistence.

## Overview

The task management application allows users to:
- View a list of tasks with their titles, descriptions, and completion status.
- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or not completed.

The application is responsive and works well on both desktop and mobile devices.



## [Live Website : Link](https://taskshubrezoanul.netlify.app/)

## [Post Man Documentation: Link](https://documenter.getpostman.com/view/30665703/2sA3dvmDSh)

## [Client-side Git : Link ](https://github.com/RezoanulHasan/task-management-frontend.)


## Technology use Backend
- Node js
- Express js
- Mongoose
- MongoDB
- typescript
- Zod (validation)
- eslint ( code formatting and quality checking )
- prettier (maintain code structure)



  ## API Endpoints

### `GET /tasks`

Retrieve a list of all tasks with pagination.

**Response:**
- 200 OK: Returns an array of task objects.

### `GET /tasks/:id`

Retrieve a specific task by its ID.

**Parameters:**
- `id` (string): The ID of the task to retrieve.

**Response:**
- 200 OK: Returns the task object if found.
- 404 Not Found: If the task with the specified ID does not exist.

### `POST /tasks`

Create a new task.

**Request Body:**
- `title` (string): The title of the task.
- `description` (string): The description of the task.


**Response:**
- 201 Created: Returns the created task object.
- 400 Bad Request: If the request body is invalid.

### `PUT /tasks/:id`

Update an existing task by its ID.

**Parameters:**
- `id` (string): The ID of the task to update.

**Request Body:**
- `title` (string): The new title of the task.
- `description` (string): The new description of the task.


**Response:**
- 200 OK: Returns the updated task object.
- 400 Bad Request: If the request body is invalid.
- 404 Not Found: If the task with the specified ID does not exist.

### `DELETE /tasks/:id`

Delete a task by its ID.

**Parameters:**
- `id` (string): The ID of the task to delete.

**Response:**
- 200 OK: Returns a message indicating the task was deleted successfully.
- 404 Not Found: If the task with the specified ID does not exist.


## Getting Started

to set up and run projects locally

- download this repository
- npm install
- npm run build
- npm run start: dev

  ## Contact

For any information, please reach out to:

- Email: rezoanulhasan96@gmail.com
- Phone: +088 01734639066

Feel free to explore the website and enjoy your experience with  the Task Management System
