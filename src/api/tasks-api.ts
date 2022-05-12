import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': 'b9caa55f-2153-4537-a838-2bf91e83757f'
    }
})

export const taskApi = {
    getTask(todolistId: string) {
        return instance.get<tasksType>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<CreateAndUpdateTaskResponseType>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<CreateAndUpdateTaskResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTask(todolistId:string,taskId:string) {
        return instance.delete<deleteTaskResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    }

}

type tasksType = {
    items: []
    totalCount: number
    error: boolean
}
/*
type createTaskResponseType = {
    data: {
        item: {
            id: string,
            title: string,
            description: boolean,
            todoListId: string,
            order: number,
            status: number,
            priority: number,
            startDate: boolean,
            deadline: boolean,
            addedDate: string
        }
    },
    messages: [],
    fieldsErrors: [],
    resultCode: number
}
*/

type CreateAndUpdateTaskResponseType = {
    "data":{
        "item":{
            id: string,
            title: string,
            description: boolean,
            todoListId: string,
            todoList?: boolean, // Правильно ли сделал??
            order: number,
            status: number,
            priority: number,
            startDate: boolean,
            deadline: boolean,
            addedDate: string
        }
        },
    "messages":[],
    "fieldsErrors":[],
    "resultCode":number
}
type deleteTaskResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}