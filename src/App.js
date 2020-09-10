import React from "react";
import AddTodo from './Components/AddTodo/Todo'
import TodoList from './Components/TodoList/TodoList.jsx'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <AddTodo />
      <hr />
      <TodoList/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
