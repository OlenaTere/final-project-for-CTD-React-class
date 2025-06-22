import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./shared/Header";

const initialTeamMembers = ["Daisy", "Johanna", "Anna"];

// const initialTasks = [
//   {
//     id: "1",
//     title: "Design the homepage",
//     assignee: "Daisy",
//     dueDate: "2025-08-20",
//     status: "todo", // options: "todo", "inprogress", "done"
//   },
//   {
//     id: "2",
//     title: "Set up backend API",
//     assignee: "Johanna",
//     dueDate: "2025-08-21",
//     status: "inprogress",
//   },
//   {
//     id: "3",
//     title: "Write user docs",
//     assignee: "Anna",
//     dueDate: "2025-08-22",
//     status: "done",
//   },
// ];

function App() {
  console.log("BASE:", import.meta.env.VITE_AIRTABLE_BASE);
  console.log("TABLE:", import.meta.env.VITE_AIRTABLE_TABLE);
  console.log("TOKEN:", import.meta.env.VITE_AIRTABLE_TOKEN);

  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [teamMembers] = useState(initialTeamMembers);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/${import.meta.env.VITE_AIRTABLE_TABLE}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            },
          },
        );
        if (!res.ok) throw new Error("Failed to fetch tasks from Airtable");
        const data = await res.json();
        // Map Airtable's response to your task structure
        const mapped = data.records.map((r) => ({
          id: r.id,
          title: r.fields.title || "",
          assignee: r.fields.assignee || "",
          dueDate: r.fields.dueDate || "",
          status: r.fields.status || "todo",
        }));
        setTasks(mapped);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Could not load tasks. " + err.message);
        setTasks([]);
      }
      setLoading(false);
    }
    fetchTasks();
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Loading tasks…</div>;
  if (error)
    return <div style={{ color: "red", padding: "2rem" }}>{error}</div>;

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/board"
          element={
            <BoardPage
              tasks={tasks}
              setTasks={setTasks}
              teamMembers={teamMembers}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
