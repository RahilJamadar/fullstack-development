# Fullstack Development Lab Journal

This repository contains my lab work for the Fullstack Development subject. Each lab helped me understand different aspects of backend and frontend development using Node.js, Express, React, and MySQL. Below is a summary of what I learned in each lab session.

---

## Lab 1: Creating Basic Servers with Node.js

In this lab, I learned how to create a simple HTTP server using Node.js and also how to set up an Express server. This helped me understand the difference between native Node.js server handling and using Express for routing and middleware.

---

## Lab 2: Modules in Node.js

We explored different types of modules:
- **Internal module**: Used the `fs` module to read and write files.
- **External module**: Used `lodash` for utility functions.
- **User-defined module**: Created a custom module for basic math operations like addition, subtraction, etc.

---

## Lab 3: Core Concepts in Node.js

This lab focused on:
- **Callable functions**: How to define and invoke functions.
- **EventEmitter**: Learned how to emit and listen to custom events.
- **Exception handling**: Used `try-catch` blocks to handle errors.
- **setTimeout**: Delayed execution of code using timers.

---

## Lab 4: Building a Simple Reminder App

We built a CLI-based reminder app using:
- `readline` module for input
- `EventEmitter` to trigger reminders
- `fs` to save reminders to a file

This lab helped me combine multiple modules into a working mini-project.

---

## Lab 5: Routing and File Streams

In this lab, I created routes for:
- `/student`
- `/teacher`
- `/subject`

I also learned how to use file streams with `fs.createReadStream` and `fs.createWriteStream` to handle large files efficiently.

---

## Lab 6: Cron Jobs and Gateway Server

We learned how to:
- Set up a **cron job** to run tasks at scheduled intervals.
- Create a **gateway server** that connects two separate backend services.

---

## Lab 7: Sequelize and MySQL Integration

We installed Sequelize and connected it to a MySQL database. I learned how to:
- Configure Sequelize
- Test the connection
- Understand the ORM structure

---

## Lab 8: Writing Models and Queries

In this lab, I wrote Sequelize models and learned how to:
- Define fields and data types
- Write queries to fetch and manipulate data

---

## Lab 9: Associations and Inner Joins

We created associations between models:
- One-to-many relationship between `Subject` and `Student`
- Used Sequelize to perform **inner joins** and fetch related data

---

## Lab 10: React App with Vite

We created a React app using Vite and built several components:
1. **Greeting Component**: Used props to display student info.
2. **Counter Component**: Used `useState` to update count on button click.
3. **Card Component**: Displayed student details using cards. Created a student object with 4 entries and rendered them using a loop.
4. **CountReducer Component**: Used `useReducer` to manage count state with increment and decrement actions.

---

## Lab 11: React Context API

We learned how to use Context API:
- Created a `UserContext` to store username and password.
- Built a `Form.jsx` component to collect data.
- Used `UserContext.Provider` to pass data to `ViewData` component.
- Displayed the form data in `ViewData`.

---

## Lab 12: Connecting Frontend to Backend

In the final lab, we connected our React frontend to a Node.js backend:
- Backend: Created models for `Student` and `Marks`, and a router to post subject, marks, and student ID.
- Frontend: Built a form to collect data and send it to the backend using `fetch`.

---

This journal summarizes everything I’ve learned in the Fullstack Development lab sessions. Each lab built on the previous one and helped me understand how to develop fullstack applications from scratch.
