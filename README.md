# 📝 React Todo App (Practice Project)

A simple **Todo application built with React** and a fake REST API using **db.json**.  
This project is created for **practice purposes** to understand React fundamentals, state management, and CRUD operations.

---

## 🚀 Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed / active
- Filter todos (All / Active / Completed)
- Check all todos
- Clear completed todos
- Display remaining todo count

---

## 🛠 Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS
- JSON Server (fake REST API)
- db.json for data storage

---

## 📂 Project Structure (Simplified)

src/
├── components/
├── hooks/
├── pages/
├── db.json
├── App.js
└── index.js

---

## 📡 API & Data Storage

- All todo data is stored in **db.json**
- `db.json` acts as a fake backend API for this project
- Default API URL:

http://localhost:3001/todos

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server
npx json-server --watch src/db.json --port 3001

4️⃣ Start React App
npm start


The app will run at:

http://localhost:3000

🎯 Learning Goals

This project is built to practice:

React components and props

useState and useEffect hooks

CRUD operations with REST APIs

Conditional rendering

Basic UI and state management

📸 UI Preview

(./assets/Screenshot.png)

👤 Author

Kyaw Phyo Win
Junior Web Developer
React Practice Project

📄 License

This project is for learning and practice purposes only.
```
