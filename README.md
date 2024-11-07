#Description
This project is a React-based web application that includes a sidebar for navigation, user authentication, and logout functionality. The user can log in, and upon logout, the username is removed from local storage, ensuring proper session management.

Features
Sidebar Navigation: A persistent sidebar for easy navigation between various pages (Dashboard, History, etc.).
User Authentication: The app supports login functionality, with the user’s data (like username) being stored in local storage upon login.
Logout with Confirmation: The logout button prompts a confirmation dialog. Once confirmed, the user is logged out, their session is cleared, and they are redirected to the login page.
LocalStorage Management: When the user logs in, the username is saved in the local storage. Upon logout, this data is cleared, ensuring a secure and clean session.
Responsive Design: The layout is responsive, making it user-friendly on both desktop and mobile devices.
Tech Stack
React (with Material-UI)
Redux Toolkit (for state management)
React Router (for navigation)
Tailwind CSS (for styling)
MUI (Material-UI) for components
Installation and Setup
Follow the steps below to set up and run the project on your local machine:

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/project-name.git
cd project-name
2. Install dependencies
Make sure you have Node.js installed on your machine. If not, download and install it from nodejs.org.

Run the following command to install the required dependencies:

bash
Copy code
npm install
3. Set up environment variables (if needed)
Make sure to set up any environment variables in a .env file if the project requires them. For example, if your project interacts with a backend API, you may need to specify the API endpoint:

env
Copy code
REACT_APP_API_URL=http://your-api-url.com
4. Start the development server
Run the following command to start the app in development mode:

bash
Copy code
npm start
This will start the application on http://localhost:3000 by default. Open this URL in your browser to see the app in action.

5. Build the application for production
To create an optimized production build, run:

bash
Copy code
npm run build
This will create a build/ folder containing the production build of your app.

How to Use
Login: The user can log in by providing their credentials.
Sidebar Navigation: Once logged in, users can navigate between pages such as the Dashboard and History via the sidebar.
Logout:  the user will be logged out, and the app will redirect to the login page.
On Login: When a user successfully logs in, their username is stored in localStorage to maintain their session.
On Logout: When the user logs out, the localStorage is cleared to ensure the user’s session is terminated properly. This includes clearing the username and other relevant session data.
Contributing
We welcome contributions to this project! If you'd like to contribute, please fork the repository and submit a pull request with your changes.


