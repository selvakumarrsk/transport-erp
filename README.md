# College ERP - Transport Management System 🚌

A modern, frontend-focused React application that simulates a Transport Pass Management workflow for a College ERP system. This project allows students to apply for bus passes and enables administrators to manage, approve, or reject those requests. 

Since this is a frontend simulation, it leverages **LocalStorage** for data persistence, allowing the application to function fully without a backend database.

## 🚀 Features

### Student Portal
* **Pass Application:** Students can fill out a form with their name, email, and route details.
* **Form Validation:** Ensures all fields are filled and the email format is correct before submission.
* **Instant Feedback:** Displays success or error messages upon submission.

### Admin Dashboard
* **Overview Table:** Displays all submitted transport pass requests.
* **Status Tracking:** Visual badges indicate whether a request is `Pending`, `Approved`, or `Rejected`.
* **Action Controls:** Admins can Approve, Reject, or Delete requests.
* **Real-time Updates:** Table updates instantly using React state and LocalStorage integration.

## 🛠️ Tech Stack

* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Styling:** Custom CSS with a modern UI design system (CSS variables, flexbox, soft shadows).
* **Data Storage:** Browser `localStorage` (via a custom storage service).
* **ID Generation:** `uuid` for unique request tracking.

## 📂 Project Structure

```text
transport-erp/
 ├── src/
 │    ├── components/
 │    │    ├── AdminDashboard.jsx  # Admin table and actions
 │    │    └── StudentForm.jsx     # Student application form
 │    ├── services/
 │    │    └── storageService.js   # LocalStorage CRUD operations
 │    ├── App.jsx                  # Main routing component
 │    ├── App.css                  # Global design system
 │    └── main.jsx                 # React entry point
 ├── index.html
 ├── package.json
 └── vite.config.js

## Installation 
1. git clone *****
2. cd transport-erp
3. npm install
4. npm run dev

##Navigation
The Student Portal is the default landing page (/).
The Admin Dashboard is a hidden route accessible by navigating to /admin.
