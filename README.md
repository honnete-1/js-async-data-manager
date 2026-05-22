# JS Async Data Manager

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![ES6 Modules](https://img.shields.io/badge/ES6-Modules-blue?style=flat)
![Fetch API](https://img.shields.io/badge/Fetch-API-green?style=flat)
![LocalStorage](https://img.shields.io/badge/Local-Storage-orange?style=flat)
![Async/Await](https://img.shields.io/badge/Async-Await-purple?style=flat)

JS Async Data Manager is a console-based JavaScript project that demonstrates modern asynchronous data fetching and local storage management. It fetches posts from a REST API, filters the top 5, displays them in the console, and persists them in the browser's Local Storage, all using clean, modular ES6 code.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Concepts Demonstrated](#concepts-demonstrated)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [API Used](#api-used)
- [Author](#author)

---

## About The Project

This project was built as part of an Advanced JavaScript assignment focused on:

- Splitting code across multiple files using **ES6 Modules**
- Fetching remote data using the **Fetch API**
- Handling async operations using both **Promises (.then/.catch)** and **async/await (try/catch)**
- Persisting data in the browser using **Local Storage**

---

## Concepts Demonstrated

| Concept | Where Used |
|---|---|
| Named Export / Import | `api.js` → `app.js` |
| Default Export / Import | `storage.js` → `app.js` |
| Fetch API | `api.js` |
| Promises & `.then/.catch` | `api.js` |
| `async/await` & `try/catch` | `storage.js` |
| `localStorage.setItem` | `storage.js` |
| Array `.slice()` | `app.js` |
| `forEach` & Template Literals | `app.js` |

---

## Project Structure

```
js-async-data-manager/
│
├── index.html       ← Entry point (loads app.js as a module)
├── app.js           ← Main application — imports and orchestrates everything
├── api.js           ← Fetches data from the API using Promises
└── storage.js       ← Saves data to localStorage using async/await
```

---

## How It Works

```
1. app.js calls fetchPosts() from api.js
         ↓
2. api.js fetches 100 posts from JSONPlaceholder API
         ↓
3. app.js slices the first 5 posts
         ↓
4. app.js prints each post to the console:
   Post 1: Title - Body
   Post 2: Title - Body
   ...
         ↓
5. app.js passes the 5 posts to saveToLocal() from storage.js
         ↓
6. storage.js saves them to localStorage under the key "userPosts"
```

---

## Getting Started

### Prerequisites
- A code editor (VS Code recommended)
- Live Server extension installed in VS Code

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/js-async-data-manager.git
```

2. Open the project folder in VS Code
```bash
cd js-async-data-manager
```

3. Right click `index.html` and select **"Open with Live Server"**

4. Open your browser console:
```
Right click page → Inspect → Console tab
```

5. You should see the first 5 posts printed in the console! 

### Checking LocalStorage

```
Inspect → Application tab → Local Storage → localhost → "userPosts"
```

---

## API Used

This project uses the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API for fake practice data.

| Endpoint | Method | Description |
|---|---|---|
| `/posts` | GET | Returns 100 fake blog posts |

---

## Author

Built with by **[Honnete Nishimwe]**

> This project was built as part of a JavaScript fundamentals assignment
> focusing on async data management and ES6 modules.