# Event Management Platform

## Overview
The Event Management Platform is a full-stack web application that allows users to create, manage, and view events. It includes user authentication, real-time updates, and a responsive design for a seamless experience.

## Features
- User authentication (Sign up, Login, Guest Login, Logout)
- Event creation, management, and filtering
- Real-time attendee updates using WebSockets
- Secure authentication with JWT
- View and register for events
- Social sharing (Share event details directly to Twitter)
- Responsive UI for all devices
- Error handling and shimmer UI for better UX

## Tech Stack
**Frontend:** React, Tailwind CSS  
**Backend:** Node.js 
**Database:** MongoDB Atlas 
**Hosting:** Render 
**Image Hosting:** Cloudinary  

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js (>=16)
- MongoDB (or use MongoDB Atlas)
- Git

### Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/vanshikaChhikaraGit/Events.git
   cd events
   ```

2. **Set up the backend**
   ```sh
   cd backend
   npm install
   cp .env  # Configure environment variables
   npm run dev
   ```

3. **Set up the frontend**
   ```sh
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Environment Variables**  
   Update `.env` files for both frontend and backend with the necessary credentials:
   ```env
   # Backend .env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_URL=your_cloudinary_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   PORT=server_port
   ```
   ```env
   # Frontend .env
   VITE_PRESET= your_cloudinary_preset_name
   VITE_CLOUD_NAME= your_cloudinary_cloud_name
   ```

### Running the Project Locally
Start both the frontend and backend servers in separate terminals:
```sh
# Backend
npm run dev

# Frontend
npm run dev
```
The app should now be accessible at `http://localhost:5173` (or the port configured in Vite).

## Test User Credentials
For evaluation, you can use the following test account:
```plaintext
Email: testuser@example.com
Password: Test@1234
```

## Deployment
The project is deployed on free-tier services:
- **Application:** Render
- **Database:** MongoDB Atlas
- **Image Hosting:** Cloudinary

## Contributing
Feel free to submit issues or pull requests to improve the platform.

## License
This project is licensed under the MIT License.

## Contact
For inquiries or further discussion, reach out via [mail vanshikachhikara12@gmail.com] or connect with me on [LinkedIn/GitHub https://www.linkedin.com/in/vanshika-chhikara-0baa55275/].

