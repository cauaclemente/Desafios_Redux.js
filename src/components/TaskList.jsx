import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

    const { tasks, deleteTask, toogleTask } =useContext(TaskContext);

  return (
    <div>
        {tasks.map((task) => (
            <div key={task.id} style={{ color: task.completed ? "red" : "#000"}}>
                <input type="checkbox" 
                checked = {task.completed}
                onChange={() => toogleTask(task.id)}
                />
                <span>{task.name}</span>
                <button onClick={() => deleteTask(task.id)}>Deletar</button>
            </div>
        ))}
    </div>
  )
}

export default TaskList