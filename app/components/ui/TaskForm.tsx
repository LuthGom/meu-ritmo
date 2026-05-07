import { useState } from "react";
import {useTasks} from "../../contexts/TaskContext";
import Button from "./Button";
import InputTask from "./InputTask";

export default function TaskForm() {
    const { addTask } = useTasks();
    const [newtask, setNewTask] = useState<CreateTaskInput>({
        title: '',
        description: '',
        time: ''
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!newtask.title.trim() || !newtask.description.trim() || !newtask.time) return;

        addTask({
            ...newtask
        })

        setNewTask({
            title: '',
            description: '',
            time: ''
        })
    }




    return (
        <form onSubmit={handleSubmit} className={`w-full flex flex-col items-start gap-2 `}>

            <InputTask label="Título" placeholder="Ex.: Exercício de musculação" value={newtask.title} onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))} />

            <InputTask label="Onde/Como fazer" placeholder="Ex.: Na academia" value={newtask.description} onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))} />

            <InputTask label="Período ou horário" placeholder="Ex.: 06:30 - 07:30" value={newtask.time} onChange={(e) => setNewTask(prev => ({ ...prev, time: e.target.value }))} />

            <Button variant="primary" size="md" type="submit" className={`h-10 w-full px-4! py-2 flex items-center justify-center rounded-xl! bg-[#2a9d8f]! text-[#FFF]! `}>+ Adicionar tarefa</Button>
        </form>
    )
}