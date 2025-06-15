export default function AboutPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About TeamChart</h1>
      <p>
        <b>TeamChart</b> is a simple and intuitive task assignment board for teams.<br />
        It was built with React and demonstrates best practices in state management, routing, and UI organization.
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
          <b>How it works:</b> All data is stored securely in your own Airtable base. Team members can collaborate and keep track of their work in real time.
        </li>
      </ul>
      <p>
        <b>Project by:</b> Olena Tereshchenko, Code the Dream
      </p>
    </div>
  );
}