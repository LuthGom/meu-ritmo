type Task = {
    id: string
    title: string
    description: string
    time: string
    done: boolean
    createdAt: string
}

type CreateTaskInput = {
    title: string
    description: string
    time: string
}