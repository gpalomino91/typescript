# Smart Document Manager

This is a TypeScript-based document management system that simulates real-world logic by combining multiple data structures. It was created for learning and reinforcing algorithmic thinking with hands-on mini-project logic.

## 🚀 Features

- **Add documents** with title, content, and tags.
- **Search documents** by title using **binary search**.
- **Filter documents** by tags or keywords using **filter**.
- **Track opened documents** using a **stack (history)**.
- **Organize documents** into folders using a **binary tree**.
- **Count and retrieve most accessed documents** using a **Map**.

## 🧠 Data Structures Used

- `Array` – For storing documents and access history.
- `Binary Search` – For efficient search by title.
- `Stack` – For tracking access history.
- `Map` – For counting access frequency.
- `Binary Tree` – For organizing documents into folder hierarchy.

## 📁 Project Structure

```
Smart-doc-manager/
├── index.ts (or your main file)
├── README.md
```

## 🛠 How to Run

### 1. Compile TypeScript to JavaScript

```bash
tsc index.ts
node index.js
```

### 2. Or run directly with ts-node

```bash
ts-node index.ts
```

## 📌 Requirements
- Node.js
- TypeScript
- ts-node (optional for direct execution)

## 🧑‍💻 Author
Created by Gonzalo Palomino Torres as part of TypeScript training and data structure mastery.

---

> This project is a foundational step before moving on to Node.js backend development. It integrates classic algorithmic practice into structured, scalable code.
