/*
# Task Filter (TypeScript)

This is a simple task manager built in TypeScript. It allows filtering, adding, and deleting tasks based on their status. Implemented as a class to maintain a clean and professional structure.

## ✅ Features

- Filter tasks by status (completed or pending).
- Add new tasks with title, ID, and status.
- Delete tasks by their ID.

## 🚀 How to Run

### Option 1: Using ts-node
```bash
ts-node taskFilter.ts
```

### Option 2: Compile and Run with Node.js
```bash
tsc taskFilter.ts
node taskFilter.js
```

## 📁 Project Structure

```
task-filter/
├── taskFilter.ts
└── README.md
```

## 💡 Example Usage

```ts
const manager = new TaskManager();

// Add tasks
manager.addTask({ id: 1, title: "Study TypeScript", completed: false });
manager.addTask({ id: 2, title: "Wash the car", completed: true });

// Filter tasks
const completed = manager.filterByStatus(true);
const pending = manager.filterByStatus(false);

// Delete task
manager.deleteTask(1);
```

This project is part of a series of mini TypeScript projects focused on logic, data structures, and best practices using classes.
*/
