import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), name: task, completed: false}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toogleTask = (id) => {
        setTasks(
            tasks.map((task) => 
          task.id === id ? {...task, completed: !task.completed} : task  
             )
        );
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toogleTask }}> 
            {children}
        </TaskContext.Provider>
    ) //task serve para consultar e AddTask para adicionar
}