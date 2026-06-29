# User Management System

A modern and responsive **User Management System** built with **React.js**, **Vite**, and **Axios**. The application allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations with advanced features like search, filtering, sorting, pagination, and form validation. It integrates with the **JSONPlaceholder REST API** and uses **Local Storage** to persist data across page refreshes.

---

## 🚀 Features

* View all users in a responsive table
* Add new users with validation
* Edit existing user details
* Delete users with confirmation dialog
* Real-time search by Name, Email, and Department
* Multi-field filtering
* Column-based sorting (Ascending & Descending)
* Client-side pagination
* Form validation with unique email verification
* Persistent data using Local Storage
* Responsive design for Desktop, Tablet, and Mobile
* Loading indicators and error handling
* Clean and reusable React component architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

### Libraries

* Axios
* React Hooks

### API

* JSONPlaceholder REST API

---

## 📂 Project Structure

```text
user_management_system
│
├── public/
│
├── src/
│   ├── api/
│   │   └── userService.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPopup.jsx
│   │   ├── UserTable.jsx
│   │   ├── UserRow.jsx
│   │   ├── UserForm.jsx
│   │   ├── Pagination.jsx
│   │   └── ConfirmDelete.jsx
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── utils/
│   │   └── validators.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/user_management_system.git
```

### Navigate to the project

```bash
cd user_management_system
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🌐 API Endpoint

```text
https://jsonplaceholder.typicode.com/users
```

---

## ✨ Functionalities

### User Management

* View all users
* Add new users
* Edit user information
* Delete users

### Search

Search users in real-time using:

* First Name
* Last Name
* Email
* Department

### Filter

Filter users by:

* First Name
* Last Name
* Email
* Department

### Sorting

Sort users by:

* First Name
* Last Name
* Email
* Department

Supports both **Ascending** and **Descending** order.

### Pagination

Available page sizes:

* 10
* 25
* 50
* 100

### Form Validation

* Required field validation
* Email format validation
* Duplicate email prevention
* Department validation

### Local Storage

User data is stored locally so that:

* Added users remain after refresh
* Updated users are preserved
* Deleted users stay removed

---

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive features include:

* Adaptive layouts
* Responsive data tables
* Mobile-friendly forms
* Flexible pagination
* Optimized filter dialog

---

## 🎨 UI Highlights

* Modern Dashboard Layout
* Clean User Interface
* Responsive Components
* Smooth Hover Effects
* Confirmation Dialogs
* Interactive Forms
* Modern Pagination
* User-Friendly Navigation

---

## ⚠️ Challenges

* JSONPlaceholder is a mock API that does not permanently store data.
* Managing CRUD operations while keeping the UI synchronized.
* Maintaining Local Storage with API data.
* Combining search, filtering, sorting, and pagination efficiently.
* Ensuring responsiveness across different screen sizes.

---

## 💡 Solution

To overcome the limitations of the mock API:

* Implemented Local Storage for persistent user data.
* Synced CRUD operations with both application state and Local Storage.
* Loaded data from Local Storage before requesting API data.
* Used reusable React components for better maintainability.

---

## 🔮 Future Enhancements

* Authentication & Authorization
* Role-Based Access Control (RBAC)
* Dark Mode
* Export Users to Excel/PDF
* Import Users from CSV
* Dashboard Analytics
* User Profile Images
* Toast Notifications
* Unit Testing
* Backend Integration
* Server-side Pagination
* Server-side Search

---

## 📦 Available Scripts

Start development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the project

```bash
npm run lint
```

---

## 🚀 Deployment

This project can be deployed on:

* Vercel
* Netlify
* Render
* GitHub Pages

---

## 👨‍💻 Author

**J Sai Rakshith**

* B.Tech – Computer Science & Engineering
* Vardhaman College of Engineering
* Hyderabad, Telangana, India

**GitHub:** https://github.com/your-github-username

**LinkedIn:** https://linkedin.com/in/your-linkedin-profile

---

## 📄 License

This project is developed for learning and portfolio purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

Thank you for visiting this repository!
