
# 🧩 TeamChart

**TeamChart** is a simple task assignment board for Teams. It allows users to create, assign, and track tasks using a Kanban-style interface. The app is built with **React**, styled with **custom CSS**, and stores task data using **Airtable**.

---

## 🚀 Features

- Create tasks with titles, due dates, and assignees
- Organize tasks across **To Do**, **In Progress**, and **Done** columns
- Fully responsive and accessible layout
- Real-time data persistence using Airtable
- Built with React Router for page navigation

---

## 🔧 Added Dependencies

| Package           | Purpose                             |
|-------------------|-------------------------------------|
| `react-router` | Client-side routing with `NavLink` and `Routes` |
| `vite`            | Fast development server and build tool |

> ⚠️ No DOM-manipulating libraries (like jQuery) are used in this project.

---

## 💻 Installation Instructions

1. **Clone this repository**

```bash
git clone git@github.com:OlenaTere/final-project-for-CTD-React-class.git 
cd teamchart

2. Install dependencies
Run `npm install` in your terminal

3. Set up environment variables
Create a .env.local file in the root directory based on the example file:
cp .env.local.example .env.local

Update the values with your own Airtable API credentials:
VITE_AIRTABLE_BASE=your_base_id
VITE_AIRTABLE_TABLE=your_table_name
VITE_AIRTABLE_TOKEN=your_api_token
Note: You can get these credentials from https://airtable.com/account and by creating a base/table for tasks.

4. Run the development server:
Run `npm run dev` in your terminal
Open your browser at http://localhost:5173


🔗 Repository

GitHub Repo:
https://github.com/OlenaTere/final-project-for-CTD-React-class#

🙋‍♀️ Created by

Olena Tereshchenko
Project for Code the Dream React course