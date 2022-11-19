import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ThemeConTextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";
import { ToggleButton } from "./components/ToggleButton";

function App() {

  return (
    <div className="App">
      <ThemeConTextProvider>
          <AuthContextProvider>
            <Navbar/>
            <TodoContextProvider>
              <Todo />
            </TodoContextProvider>
            <ToggleButton />
        </AuthContextProvider>
      </ThemeConTextProvider>
    </div>
  );
}

export default App;
