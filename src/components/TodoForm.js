import {useState, useContext} from 'react'
import {v4 as uuidv4} from "uuid";
import  Button from "react-bootstrap/Button"
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import { ADD_TODO } from '../reducers/types';

export const TodoForm = (props) => {
  const {theme} = useContext(ThemeContext)
  const {dispatch} = useContext(TodoContext)

  const [title, setTitle] = useState("")

  const {isLightTheme, light, dark} = theme
  const style = isLightTheme ? light: dark

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title 
        }
      }
    })
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Enter a new todo..." 
          onChange={handleChangeTitle} 
          value={title}
          required/>
        <div className="toggle-btn">
          <Button variant={style} type="submit" style={style}>Add</Button> 
        </div>
        
    </form>
  )
}
