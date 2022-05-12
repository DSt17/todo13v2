import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b9caa55f-2153-4537-a838-2bf91e83757f'
    }
})

export const todolistApi = {
    getTodo() {
        return instance.get <todoType[]>(`todo-lists`)
    },
    createTodo(title: string) {
        return instance.post<commonResponseType<{ item: todoType }>>(`todo-lists`, {title: title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<commonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(title: string, todolistId: string) {
        return instance.put<commonResponseType>(`todo-lists/${todolistId}`,
            {title: title})
    }
}

type commonResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}

type todoType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}



