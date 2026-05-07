import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import {useTasks} from "@/contexts/TaskContext";

export default function Tasklist() {
    const { tasks, removeTask } = useTasks();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className={`w-full!`}>
            {tasks.map((item) => (
                 <TaskItem 
                    key={item.id}
                    task = {{...item, time: '', done: false, createdAt: new Date().toDateString()}}
                    deleteEvent={() => removeTask(item.id)}
                />
            ))}

           
        </div>
    )
}