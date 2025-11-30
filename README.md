# 🚀 BizDateUp Frontend Task

A complete frontend assignment built as part of the BizDateUp Internship Task.  
This project demonstrates form handling, API integration (MockAPI), CRUD operations, reusable UI components and responsive design.

---

## 🔗 Live Demo

| Page | Link |
|------|------|
| 🏠 Home | https://bizdateup-frontend-task.onrender.com/#/ |
| 📊 Dashboard | https://bizdateup-frontend-task.onrender.com/#/dashboard |

---

## ✨ Features

- 🎨 UI built based on provided Figma Design  
- 📩 Talent form connected to API using Axios  
- 🧾 Data stored in MockAPI `/submissions`  
- 📊 Dashboard to view all submissions  
- ✏️ Edit (PUT) and ❌ Delete (DELETE) support  
- 🔁 Reusable components and clean code structure  
- 📱 Fully responsive layout  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| ⚛ React + Vite | UI development |
| 🎨 TailwindCSS | Styling |
| 🚦 React Router DOM | Routing |
| 🔗 Axios | HTTP Requests |
| 🧪 MockAPI | Backend |

---

## 📦 Installation

```bash
git clone https://github.com/shubhamshrivastav1/bizdateup-frontend-task.git
cd bizdateup-frontend-task
npm install
npm run dev



Open the URL shown in terminal (usually http://localhost:5173/).



🧾 MockAPI Structure

Resource: /submissions

| Field     | Example                                   |
| --------- | ----------------------------------------- |
| fullName  | "John Doe"                                |
| email     | "[john@email.com](mailto:john@email.com)" |
| phone     | "9876543210"                              |
| role      | "Frontend Developer"                      |
| hireCount | "3"                                       |
| budget    | "10000-20000"                             |
| persona   | "Hiring Manager"                          |
| info      | "Looking for a talented developer"        |


Methods Used: GET, POST, PUT, DELETE


📁 Folder Structure

src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Card.jsx
 │    ├── Input.jsx
 │    └── Footer.jsx
 ├── forms/
 │    └── SubmissionForm.jsx
 ├── pages/
 │    ├── Landing.jsx
 │    └── Dashboard.jsx
 ├── App.jsx
 └── main.jsx


🤝 Contribution

This project was created for an internship assignment.
Suggestions and improvements are always welcome.


📜 License

This project is licensed under the MIT License.


⭐ If you found this project useful, please give it a star!

