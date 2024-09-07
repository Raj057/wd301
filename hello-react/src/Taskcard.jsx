import "./Taskcard.css";

const TaskcardPen = (props) => {
  return (
    <div className="TaskSection">
      <h3 className="TaskTitle project-name">{props.title}</h3>
      <p>Due on: {props.dueDate}</p>
      <p>Assignee: {props.assignee}</p>
    </div>
  );
};

const TaskcardDone = (props) => {
  return (
    <div className="TaskSection">
      <h3 className="TaskTitle project-name">{props.title}</h3>
      <p>Completed on: {props.completedDate}</p>
      <p>Assignee: {props.assignee}</p>
    </div>
  );
};

const TaskcardS = (props) => {
  return (
    <div className="TaskSectionHeader">
      <h2 className="TaskStatus">{props.title}</h2>
    </div>
  );
};

export { TaskcardPen, TaskcardDone, TaskcardS };
