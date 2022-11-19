import {
    GET_TODO,
    SAVE_TODO,
    ADD_TODO, 
    DELETE_TODO 
} from "./types"

export const todoReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_TODO:
            const todos = localStorage.getItem('todos')
            if (todos) state= JSON.parse(todos)
            return state

        case SAVE_TODO:
            localStorage.setItem("todos", JSON.stringify(payload.todos))
            return state
        
        case ADD_TODO:
            return [...state, payload.todo]
        
        case DELETE_TODO:
        return state.filter(todo => todo.id !== payload.id)

        default:
            return state
    }
        
}