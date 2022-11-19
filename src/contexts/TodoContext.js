import {createContext,  useEffect, useReducer} from "react"
import { todoReducer } from "../reducers/TodoReducer"
import { GET_TODO, SAVE_TODO } from "../reducers/types"

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const todosList = JSON.parse(localStorage.getItem("todos")) || []

    const [todos, dispatch] = useReducer(todoReducer, todosList)

    // useEffect
    useEffect (() => {
        dispatch({
            type: GET_TODO,
            payload: null
        })
    }, [])

    useEffect (() => {
        dispatch({
            type: SAVE_TODO,
            payload: {todos}
        })
    }, [todos])

    // Context data
    const themeContextData= {
        todos, 
        dispatch
    }

    return (
        <TodoContext.Provider value={themeContextData}>{children}</TodoContext.Provider>
    )   
}

export default TodoContextProvider