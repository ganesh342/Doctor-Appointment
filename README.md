# 🩺 Doctor Appointment App (Full Stack)

This is a full-stack Doctor Appointment application built with:

* **Frontend**: React Native (Expo)
* **Backend**: Node.js + Express + TypeScript
* **State Management**: Redux Toolkit
* **API Hosting**: Render

---

## 🔗 Hosted Backend URL

**Base API**: [`https://backend-appointment.onrender.com`](https://backend-appointment-cr8f.onrender.com)

---

## 📱 Frontend Setup (React Native with Expo)

### 🔧 Prerequisites

* Node.js (v16+)
* Expo CLI (`npm install -g expo-cli`)
* Android Studio or Expo Go App (for testing)

### 🚀 To Run Frontend:

```bash
cd frontend
npm install
npx expo start
```

* Press `a` to launch Android emulator or scan QR in Expo Go app

---

## 🛠 Backend Setup (Express + TypeScript)

### 🔧 Prerequisites

* Node.js
* TypeScript

### 🚀 To Run Backend Locally:

```bash
cd backend
npm install
npm run dev
```

### 🏗 To Build for Production:

```bash
npm run build
```

### 🔥 To Start Production Server:

```bash
npm start
```

---

## 📂 Project Structure

```
doctor-appointment-app/
├── frontend/                # React Native app
│   ├── App.tsx
│   ├── screens/
│   └── redux/
├── backend/                # Express TypeScript API
│   ├── src/
│   └── dist/
├── README.md
└── .gitignore
```

---

## 🧠 Assumptions & Decisions

* The backend uses in-memory mock data only (no database yet)
* Appointments and prescriptions are reset on server restart
* Expo CLI is used for fast mobile development
* Backend is deployed on Render, connected via Axios in frontend
* The entire app is designed for mobile UI with clean UX using StyleSheet

---

## 📸 Screenshots

*You can include screenshots or screen recordings of the UI here if needed.*

---

## ✍️ Author

Made with ❤️ by **Ganesh M** as part of a full-stack internship project.

---

## 📄 License

This project is open source and intended for educational and demo purposes.
