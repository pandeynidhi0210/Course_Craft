CourseCraft – Project Flow (User Workflow)
1)Open the Application
The user lands on the Home page, which introduces the Course Management System.
A sidebar provides navigation to Home, Add Course, View Courses, About Us, and Contact.

![image alt](https://github.com/pandeynidhi0210/Course_Craft/blob/aa68c8c1cfabf8ec8519bc2cec8116806f77e754/Open%20the%20Application.png)


2)Navigate to Add Course
The user clicks Add Course from the sidebar.
A form is displayed with fields:
Course ID
Course Title
Course Description
Add a New Course
The user enters the course details.
On clicking Add Course, the React frontend sends a POST request to the Spring Boot REST API using Axios.
The backend validates and stores the course in the database.
A success notification is displayed.
View All Courses
The user opens the View Courses page.
React sends a GET request to the backend.
The backend retrieves all courses from the database and returns them as JSON.
React displays each course in a card with its ID, title, description, and action buttons.
Update an Existing Course
The user clicks the Update button for a course.
The selected course details are loaded into an editable form.
After making changes, the user submits the form.
React sends a PUT request to the backend.
The database is updated, and the latest information is displayed.
Delete a Course
The user clicks the Delete button.
React sends a DELETE request to the Spring Boot backend.
The course is removed from the database.
A success notification is shown, and the course list refreshes automatically.
Navigation
The sidebar allows users to switch between pages without reloading the application using React Router.


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> </p>
