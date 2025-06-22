import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="page">
      <h1>About TeamChart</h1>
      <p>
        <b>TeamChart</b> is a simple and intuitive task assignment board for
        Teams.
      </p>
      <ul>
        <li>
          <b>Features:</b>
          <ul>
            <li>Task creation, assignment, and progress tracking</li>
            <li>Kanban-style board with columns for each status</li>
            <li>Persistent data storage via Airtable</li>
            <li>Responsive, accessible interface</li>
          </ul>
        </li>
        <li>
          <b>How it works:</b> All data is stored securely in your own Airtable
          base.
        </li>
      </ul>
      <p>
        <b>Project by:</b> Olena Tereshchenko, Code the Dream
      </p>
    </div>
  );
}
