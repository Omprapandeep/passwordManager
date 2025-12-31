# 🔐 Password Manager – PassOP

A full-stack password manager web application that allows users to securely store, view, update, and delete their passwords.  
Built using React (Vite), Node.js, Express, and MongoDB Atlas, and fully deployed on cloud platforms.

---

## 🚀 Live Demo

Frontend (Vercel):  
https://password-manager-smoky.vercel.app

Backend:  
Deployed on Render (used internally by the frontend)

---

## ✨ Features

- Add new passwords  
- Edit existing passwords  
- Delete saved passwords  
- Show / hide passwords  
- Copy site, username, and password to clipboard  
- Light & Dark theme support  
- Real-time UI updates  
- Cloud-based storage using MongoDB Atlas  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Toastify
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB (Native Driver)
- CORS
- dotenv

### Database
- MongoDB Atlas (Cloud NoSQL)

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 🏗️ Project Architecture

React (Vite) – Frontend (Vercel)  
↓ REST API  
Node.js + Express – Backend (Render)  
↓  
MongoDB Atlas – Cloud Database  

---

## ⚙️ Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.onrender.com
