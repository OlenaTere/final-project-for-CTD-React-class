
import TaskBoard from "../features/tasks/TaskBoard";

export default function BoardPage(props) {
  console.log("tasks passed to BoardPage:", props.tasks);
  return <TaskBoard {...props} />;
}
