// export default function BoardPage({ tasks }) {
//   console.log("tasks passed to BoardPage:", tasks);
//     return <h1>Board Page</h1>;
//   }
import TaskBoard from "../features/tasks/TaskBoard";

export default function BoardPage(props) {
  console.log("tasks passed to BoardPage:", props.tasks);
  return <TaskBoard {...props} />;
}
