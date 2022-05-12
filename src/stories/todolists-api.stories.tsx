import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";
import {taskApi} from "../api/tasks-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodo()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = ''
        todolistApi.createTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let titleForDelete = 'c0560264-d6f7-42a9-94e2-931cf3d4cf6d'
        todolistApi.deleteTodo(titleForDelete)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let titleForNewTodolist = "Friends"
        let todolistIdForChangeTitle = "fe49866d-e97d-47e7-b9a8-97616bcc8510"

        todolistApi.updateTodoTitle(titleForNewTodolist, todolistIdForChangeTitle)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        let todolistId = '980cf159-21c8-4304-a205-372b9a82de30'
        taskApi.getTask(todolistId)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        let todolistId = 'fe49866d-e97d-47e7-b9a8-97616bcc8510'
        let title = 'Dmitry'
        taskApi.createTask(todolistId, title).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        let todolistId = '980cf159-21c8-4304-a205-372b9a82de30'
        let taskId = '9efd4b59-a411-4f97-a96e-0414ee5dd107'
        let title = 'MAFIA'
        taskApi.updateTask(todolistId, taskId, title).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '4732e71e-918f-496a-a3fd-c46c53e56067'
        let taskId = 'ccbcf61c-ba3b-47c9-b402-29941b08c57c'
        taskApi.deleteTask(todolistId, taskId).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}