# Week-7_Assignment_Celebal-Summer-Internship

## JWT Authentication for RESTful API

This project adds JSON Web Token (JWT) authentication to an existing RESTful API. It ensures secure handling of tokens and implements a protected route.

## Features

1. **User Signup**
   - **POST** `/signup`
   - Create a new user by providing the necessary details.

2. **User Login**
   - **POST** `/login`
   - Authenticate a user and receive a JWT token for session management.

3. **View User Details**
   - **GET** `/users`
   - Access this protected route with a valid JWT token to view user details.

4. **User Logout**
   - **POST** `/logout`
   - Requires a valid JWT token. Logs out the user by invalidating the token.

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **dotenv** (for environment variables)

## Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship.git
   cd Week-7_Assignment_Celebal-Summer-Internship
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     DATABASE_URI=<your_mongodb_connection_string>
     ACCESS_SECRET_TOKEN=<your_jwt_secret>
     ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your web browser or API client and visit:**
   ```
   http://localhost:<your_port_number>
   ```

## API Endpoints

### User Endpoints

- **Create a new user**
  - **POST** `/signup`
  - Request body:
    ```json
    {
      "username": "John Doe",
      "password": "password123"
    }
    ```
    ![image](https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship/assets/116145439/05f87a03-7dd6-4000-8cb6-2e7f1fe04c1c)

    ---


- **User login**
  - **POST** `/login`
  - Request body:
    ```json
    {
      "username": "John Doe",
      "password": "password123"
    }
    ```
    ![image](https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship/assets/116145439/0fad678a-1250-469e-83dd-7003a1fded3e)

    ---


- **View user details (Protected)**
  - **GET** `/users`
  - Requires a valid JWT token in the `Authorization` header.
  <br>

  ![image](https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship/assets/116145439/a277f245-2cd9-48a8-ad52-ac0bb88ff46f)

  

- **User logout**
  - **POST** `/logout`
  - Requires a valid JWT token in the `Authorization` header.
  <br>

  ![image](https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship/assets/116145439/53597764-0e63-46c1-861f-a6a6f9f3e9a2)

  ---

- **Post-Logout Behavior**
  - After logging out, if the user attempts to access the `/users` route, they will receive a "user logged out" response due to the invalidated token.
  <br>

  ![image](https://github.com/Anupam-03/Week-7_Assignment_Celebal-Summer-Internship/assets/116145439/694b360e-a4ae-49b9-946c-9cb9d2acca4e)



