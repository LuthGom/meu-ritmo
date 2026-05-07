"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TASKS_STORAGE_KEY } from "@/constants";

// 1. Tipagem das tarefas
export interface Task {
    id: string;
    title: string;
    description: string;
    time: string;
}

export type CreateTaskInput = {
    title: string;
    description: string;
    time: string;
};

interface TaskContextData {
    tasks: Task[];
    addTask: (input: CreateTaskInput) => void;
    removeTask: (id: string) => void;
}

// 2. Criação do Contexto
const TaskContext = createContext<TaskContextData | undefined>(undefined);

// 3. Implementação do Provider
export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);


    // Efeito para carregar dados e evitar erro de Hidratação (SSR vs Client)
    useEffect(() => {

        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
        if (storedTasks) {
            try {
                setTasks(JSON.parse(storedTasks));
            } catch (error) {
                console.error("Erro ao carregar tarefas do localStorage:", error);
            }
        }
    }, []);

    const addTask = (input: CreateTaskInput) => {
        const newTask: Task = {
            ...input,
            id: crypto.randomUUID(),
        };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updatedTasks));
    };

    const removeTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updatedTasks));
    };

    // Enquanto o componente não estiver montado no cliente, 
    // renderizamos apenas os filhos para evitar discrepância com o HTML do servidor


    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
}

// 4. Hook para consumir o contexto
export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks deve ser usado dentro de um TaskProvider");
    }
    return context;
}
