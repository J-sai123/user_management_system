# User Management System

A modern and responsive User Management System built using React.js, Vite, and Axios. The application provides complete CRUD (Create, Read, Update, Delete) functionality with advanced features such as searching, filtering, sorting, pagination, form validation, and Local Storage support.

The project integrates with the JSONPlaceholder REST API for fetching user data while using Local Storage to preserve user modifications across page refreshes.

---

# Features

* View all users in a responsive table
* Add new users
* Edit existing user details
* Delete users with a confirmation dialog
* Real-time search by First Name, Last Name, Email, and Department
* Multi-field filtering
* Sorting (Ascending and Descending)
* Client-side pagination
* Configurable page sizes (10, 25, 50, 100)
* Client-side form validation
* Unique email validation
* Local Storage integration
* Responsive design for Desktop, Tablet, and Mobile
* Modern user interface
* Loading indicators and error handling

---

# Technologies Used

## Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

## Libraries

* Axios
* React Hooks

## API

* JSONPlaceholder REST API

---

# Project Structure

```text
user_management_system
│
├── public
│
├── src
│
├── api
│   └── userService.js
│
├── components
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── FilterPopup.jsx
│   ├── UserTable.jsx
│   ├── UserRow.jsx
│   ├── UserForm.jsx
│   ├── Pagination.jsx
│   └── ConfirmDelete.jsx
│
├── styles
│   └── app.css
│
├── utils
│   └── validators.js
│
├── App.jsx
├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/user_management_system.git
```

Move into the project directory

```bash
cd user_management_system
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# API Endpoint

```
https://jsonplaceholder.typicode.com/users
```

---

# Implemented Functionalities

## User Management

* Display all users
* Add new users
* Edit user details
* Delete users

## Search

Search users in real time using:

* First Name
* Last Name
* Email
* Department

## Filter

Filter users using:

* First Name
* Last Name
* Email
* Department

## Sorting

Sort users by:

* First Name
* Last Name
* Email
* Department

Supports both Ascending and Descending order.

## Pagination

Available page sizes:

* 10
* 25
* 50
* 100

The pagination system is integrated with search, filtering, and sorting to provide a smooth browsing experience. The current implementation focuses on efficient data handling, and future improvements will enhance the visibility and accessibility of the Previous and Next navigation controls when horizontal scrolling is enabled on smaller screens.

## Form Validation

The application validates:

* Required fields
* Email format
* Duplicate email addresses
* Department selection

## Local Storage

User data is stored in Local Storage.

Whenever a user is:

* Added
* Updated
* Deleted

the Local Storage updates automatically.

On application startup, data is loaded from Local Storage before fetching data from the API.

---

# Responsive Design

The application is fully responsive and supports:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive features include:

* Responsive user table
* Flexible layouts
* Mobile-friendly forms
* Adaptive pagination
* Responsive filter popup

---

# UI Highlights

* Modern Dashboard Layout
* Clean User Interface
* Responsive Components
* Interactive Forms
* Confirmation Dialog
* Smooth Animations
* Hover Effects
* Attractive Pagination

---

# Challenges Faced

* JSONPlaceholder is a mock API and does not permanently store data.
* Maintaining user changes after page refresh.
* Implementing client-side unique email validation.
* Managing search, filtering, sorting, and pagination together while maintaining application state.
* Building a responsive table that works efficiently across different screen sizes.

---

# Solution

To overcome the API limitation:

* Implemented Local Storage to preserve user modifications.
* CRUD operations update both the application state and Local Storage.
* The application loads data from Local Storage before requesting data from the API.
* Used reusable React components for better maintainability.
* Optimized search, sorting, filtering, and pagination to work together efficiently.

---

# Future Enhancements

* Authentication and Authorization
* Role-Based Access Control
* Dark Mode
* Export Users to Excel/PDF
* Import Users using CSV
* Dashboard Statistics
* User Profile Images
* Toast Notifications
* Unit Testing
* Backend Integration
* Server-side Pagination
* Server-side Search
* Improved responsive pagination with fixed Previous and Next navigation controls during horizontal scrolling.

---

# Available Scripts

Start the development server

```bash
npm run dev
```

Build the application

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

Run the linter

```bash
npm run lint
```

---

# Deployment

The project can be deployed on:

* Vercel
* Netlify
* Render
* GitHub Pages

---

# Author

**J Sai Rakshith**

B.Tech – Computer Science and Engineering

Vardhaman College of Engineering

Hyderabad, Telangana, India

GitHub: https://github.com/Nareshboosi/user_management_sys

---

# License

This project is created for educational and portfolio purposes.

---

# Acknowledgement

Thank you for reviewing this project. It demonstrates React fundamentals, REST API integration, CRUD operations, Local Storage management, responsive design, component-based architecture, and modern frontend development practices.
