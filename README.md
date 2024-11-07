# Project Description

This project is a **React-based web application** that includes a sidebar for navigation, user authentication, and logout functionality. The application is designed to manage user sessions locally using `localStorage`. Upon logging in, the user's data (like username) is stored in the local storage, and upon logout, it is removed to ensure proper session management.

## Features

- **Sidebar Navigation**: A persistent sidebar that provides easy navigation between various pages (Dashboard, History, etc.).
- **User Authentication**: The app supports login functionality. After a successful login, the user’s data (such as username) is stored in local storage.
- **Logout with Confirmation**: When the user clicks the logout button, a confirmation dialog is shown. Once confirmed, the user is logged out, their session is cleared, and they are redirected to the login page.
- **LocalStorage Management**: The username is saved in `localStorage` after login. Upon logout, this data is cleared to ensure that no session information persists after logout.
- **Responsive Design**: The layout is responsive, making the app user-friendly on both desktop and mobile devices.

## Tech Stack

- **React** (for the frontend framework)
- **Redux Toolkit** (for state management)
- **React Router** (for navigation between pages)
- **Tailwind CSS** (for styling)
- **Material-UI** (for pre-built React components)

## Installation and Setup

Follow the steps below to set up and run the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/jainaastha009/Project.git
cd Project

##  Iinstallation
 1:-npm install
  2:npm run dev 

