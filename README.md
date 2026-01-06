
# 📋 ToDo List Application



## 📌 Project Description

This project is a simple ToDo List application that allows users to:

- add and delete tasks;
- save tasks using localStorage;
- switch between light and dark themes with persistence.

The application is built using a modular JavaScript architecture for better readability and maintainability.
## 🧩 Project Structure

- main.js — application initialization and event handling
- render-tasks.js — DOM rendering logic for tasks
- tasks.js — task management logic (add / delete)
- local-storage-api.js — saving and loading tasks and theme from localStorage
- refs.js — centralized DOM element references
- heme-switcher.js — theme toggle logic
## ✅ Features

➕ Add Tasks
 - Users enter a task title and description.
 - Clicking the Add button adds the task to the list.
 - Empty inputs are not allowed.
 - The form is cleared after successful submission.

 🗑 Delete Tasks

 - Each task card includes a Delete button.
 - Tasks are removed from the list and from localStorage.

 💾 Data Persistence

 - All tasks are saved to localStorage.
 - Tasks are restored automatically after page reload.

 🌗 Theme Switcher

 - Light and dark themes are supported.
 - The selected theme is saved in localStorage.
 - The saved theme is applied on page reload.

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript (ES Modules)
- LocalStorage API

