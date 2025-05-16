# 🎓 Student Report Card System

This project consists of two parts:

1. A **frontend** web-based Student Report Card Viewer built with **HTML, CSS, and JavaScript** for displaying academic results dynamically by entering student roll numbers.

2. A **backend** RESTful API built with **Java Spring Boot** that manages student data and grades, providing endpoints to support report card operations.

---

## ✨ Features

- 🎯 **Dynamic Student Lookup**  
  Enter a student roll number (101 to 105) to view their report card details instantly on the frontend.

- 📝 **Comprehensive Report Cards**  
  Student info, term-wise marks, grades, teacher remarks, attendance, and summary.

- 🖼️ **Student Photos**  
  Visual identification of students on the frontend.

- ✒️ **Signature Placeholders**  
  Areas for teacher and parent signatures.

- 🚫 **Error Handling**  
  User-friendly alerts for invalid roll numbers.

- 🔗 **RESTful Backend API**  
  CRUD operations for student data, grade calculations, and reporting.

- 🧪 **Unit Testing**  
  Backend tested with JUnit.

- 📱 **Responsive Design**  
  Works well on desktop and mobile devices.

---

## 🔧 Technologies Used

### Frontend  
- HTML5  
- CSS3 (Flexbox, Media Queries)  
- JavaScript (Vanilla JS for DOM manipulation and dynamic content)

### Backend  
- Java 21  
- Spring Boot 3.4.5  
- Maven (Build & Dependency Management)  
- RESTful API Design  

### Tools & Platforms  
- Git & GitHub (Version control and project hosting)  
- GitHub Pages (For frontend deployment)  
- IntelliJ IDEA / Eclipse (IDE for development)  

### Testing  
- JUnit (Backend unit testing)  

### Data Formats  
- JSON (for frontend data mocking and backend data exchange)

---

## 📁 Project Structure Overview

studentReport/
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── assets/
│ └── student-photos/
├── backend/
│ ├── src/
│ │ └── main/java/com/web/studentReport/
│ │ ├── controller/
│ │ ├── model/
│ │ ├── repository/
│ │ └── service/
│ ├── pom.xml
│ └── application.properties

yaml
Copy code

---

## 🚀 Getting Started

### Frontend  
1. Clone or download the repo.  
2. Open `frontend/index.html` in any modern browser.  
3. Enter a roll number (101–105) to view the student report card.

### Backend  
1. Import the `backend` folder as a Maven project in your IDE.  
2. Run the Spring Boot application using:  
   ```bash
   ./mvnw spring-boot:run
The backend server will start at: http://localhost:8080

Use API clients like Postman or your frontend to interact with the REST endpoints.

📡 API Endpoints (Examples)
Method	Endpoint	Description
GET	/students	Get all student records
POST	/students	Add a new student
PUT	/students/{id}	Update student information
DELETE	/students/{id}	Delete a student record

👨‍💻 Author
Goutham Thatukunoori

🔗 LinkedIn

📧 your.email@example.com

---

Would you like me to generate separate README files for frontend and backend too? Or add instructions for deployment on GitHub Pages or Heroku?
