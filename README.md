# Vibex

**Vibex** is a modern, full-stack social media platform inspired by Twitter. Built with the MERN stack and Vite, Vibex lets you connect, share, and interact with others in real time. Whether you're posting updates, following friends, or customizing your profile, Vibex delivers a smooth and engaging experience.

---

## Features

- 🔐 **User authentication** (signup, login, logout)
- 📝 **Create, like, and comment on posts**
- 👥 **Follow/unfollow users**
- 🖊️ **Edit profile, upload avatar and cover images**
- 📱 **Responsive UI inspired by Twitter**
- 🔔 **Real-time notifications**
- 🛡️ **Protected routes and JWT-based auth**

---

## Tech Stack

- **Frontend:** React, Vite, React Query, React Router, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Cloud:** Cloudinary (for image uploads)
- **Other:** JWT, bcrypt, cookie-based auth

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rampradops28/vibex.git
cd vibex
```

### 2. Setup Environment Variables

#### Backend (`/backend/.env`):

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Frontend

Environment variables for the frontend are set using Vite’s `VITE_` prefix.  

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 4. Run the App

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

---

## Deployment

- The backend is deployed on [Render](https://render.com/).
- Set all backend environment variables in your Render dashboard.  
- Build the frontend with `npm run build`.
- Serve the frontend build with your backend or deploy it to a static host (like Vercel, Netlify, or Render static site).

---

**Made with ❤️ for learning and fun!**