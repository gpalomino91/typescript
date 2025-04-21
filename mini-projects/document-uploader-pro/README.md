# 📁 DocumentUploaderPro

**Mini project built with Node.js + TypeScript** that simulates a document upload and processing system. Designed to practice key data structures like `Queue`, `Set`, and `BinaryTree` applied in a real backend environment using Express.

---

## 🚀 Project Goals

- Simulate a document handling system using:
  - ✅ Queue (FIFO) for document processing order
  - ✅ Set to prevent duplicate documents by title
  - ✅ BinaryTree to sort and search documents alphabetically

---

## 🧠 Data Structures Used

| Structure     | Purpose                                                              |
|---------------|----------------------------------------------------------------------|
| `Queue`       | Process documents in the order they arrive                           |
| `Set`         | Prevent duplicate uploads based on document title                    |
| `BinaryTree`  | Organize and search documents alphabetically by title               |

---

## 🏗️ Project Structure

```
document-uploader-pro/
├── src/
│   ├── index.ts            # Entry point with Express server
│   ├── controllers/        # Endpoint logic
│   ├── routes/             # Express routes
│   ├── models/             # Data structures (Queue, Set, BinaryTree)
│   └── utils/              # Helper functions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Installation & Usage

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
```

---

## 🛣️ Planned Endpoints

- `POST /upload` → Add document to the queue
- `GET /process` → Process the next document
- `GET /history` → Retrieve upload history
- `GET /search/:title` → Search document by title using the binary tree

---

## 💡 Educational Purpose

This project was created as part of a hands-on training in data structures and backend development with TypeScript. It is one of several mini-projects located in the repository [gpalomino91/typescript](https://github.com/gpalomino91/typescript).

---

