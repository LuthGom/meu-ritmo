import TaskCard from "./TaskCard";
import { Pencil, Trash2 } from "lucide-react";
import type { MouseEvent } from "react";

type TaskItemProps = {
    task: Task;
    deleteEvent: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function TaskItem({ task, deleteEvent }: TaskItemProps) {
    return (
        <div className={`w-full! `}>

            <TaskCard cardTitle={task.title} description={task.description} time={task.time} className={`p-4!`}>
                <div className={`w-full! flex gap-2 justify-end`}>
                    <button className={`w-auto text-orange-500! bg-amber-100! rounded-full! p-1!` }>
                        <Pencil size={14}  />
                    </button>
                    <button onClick={deleteEvent} className={`text-red-400! bg-red-100! rounded-full! p-1!`}>
                        <Trash2 size={16} />
                    </button>
                </div>

            </TaskCard>
        </div>

    )
}