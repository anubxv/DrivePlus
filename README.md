# DrivePlus - File Storage App

This simple drive implementation came up to me as a project that reinforced my learning in Backend technologies, and will empower me, Anubhav , to curate more nuanced applications on the way !

DrivePlus is a file storage application inspired by Google Drive, built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This app allows users to upload, view, and download their files securely, with authentication and basic file management features.

## Features
- **User Authentication**: Sign up, log in, and manage user sessions with JWT (JSON Web Tokens).
- **File Upload**: Securely upload images, documents, and other file types using **Cloudinary**.
- **File Management**: View your uploaded files and download them.
- **Cloud Storage**: Leverage **Cloudinary** for storing and retrieving files.
- **Database**: Use **MongoDB** for storing user and file data.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for modeling data)
- **Authentication**: JWT (JSON Web Tokens) for user authentication
- **Cloud Storage**: Cloudinary for file storage
- **Frontend**: EJS templating engine
- **Styling**: TailwindCSS (optional) for styling

## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:
- **Node.js** (v14+)
- **MongoDB** (or a MongoDB Atlas account)
- **Cloudinary Account** (for file storage)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository

	2.	Install dependencies:

npm install


	3.	Set up the .env file:
Create a .env file in the root directory and add the following variables:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret_key
PORT=5000

	•	MongoDB: Replace your_mongodb_connection_string with your MongoDB connection URI (e.g., from MongoDB Atlas).
	•	Cloudinary: Replace your_cloud_name, your_api_key, and your_api_secret with your Cloudinary credentials.
	•	JWT Secret: Set a secret key for signing JWT tokens (can be anything random).
	•	Port: Set the port number if needed (default is 5000).

	4.	Start the server:

npm start

The server should now be running on http://localhost:5000.

Running the Application
	•	Navigate to /login to sign in.
	•	If you’re not registered yet, go to /signup.
	•	Once logged in, you will be redirected to the /home page where you can upload and view files.
	•	To upload files, use the upload functionality in the UI. Files are stored in Cloudinary.

Deployment
	1.	Heroku / Render: To deploy the app, you can follow deployment guides for services like Heroku or Render. These platforms will automatically assign a dynamic port, so ensure you modify the PORT variable appropriately in your app’s configuration.
	2.	MongoDB Atlas: For cloud-hosted databases, you can use MongoDB Atlas to store your data remotely.

Contributing

If you’d like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.

How to contribute:
	1.	Fork the repository
	2.	Create a new branch (git checkout -b feature-branch)
	3.	Make your changes
	4.	Commit your changes (git commit -am 'Add new feature')
	5.	Push to the branch (git push origin feature-branch)
	6.	Create a new pull request


Acknowledgements
	•	Cloudinary: For providing the file storage platform.
	•	MongoDB: For the powerful cloud database solution.
	•	Node.js and Express: For the backend API.
	•	JWT: For secure user authentication.
