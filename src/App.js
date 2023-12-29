import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (todoTitle.trim().length < 1){
      alert("No Task Added !");
      return;
    }

    else {
      let newTask = {
        title: todoTitle,
      };
  
      let todoArray = [...todoList];
      todoArray.push(newTask);
  
      setTodoList(todoArray);
      setTodoTitle("");
    }
  };

  const updateTask = (index) => {
    setEditTask(index);
    setTodoTitle(todoList[index].title);
  };

  const saveUpdate = () => {
    if (editTask !== null && !todoTitle.trim().length < 1) {
      let updatedList = [...todoList];
      updatedList[editTask].title = todoTitle;
      setTodoList(updatedList);
      setEditTask(null);
      setTodoTitle("");
    }

    else {
      alert("Input Field is Empty !");
      return;
    }
  };

  const cancelUpdate = () => {
    setEditTask(null);
    setTodoTitle("");
  };

  const deleteTask = (index) => {
    let updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (

    <section>
      <div className="title">
        <h1>To-Do List</h1>
      </div>

      <div className="addTask">
        <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} className="inputTask" placeholder="Add a Task..." />
        <button className="addBtn" onClick={addTask}><b>Add</b></button>
      </div>

      <div className="taskBox">
        <div className="todo-container">
          <h2>To-Do Tasks: </h2>
        </div>

        <div className="tasks-container">
          {todoList.map((item, index) => {
            return (
              <div className="tasks" key={index}>
                {editTask === index ? (
                  <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                ) : (
                  <h2>{item.title}</h2>
                )}

                <div className="tasksBtn">
                  {editTask === index ? (
                    <>
                      <button className="saveContainer" onClick={saveUpdate}><b>Save</b></button>
                      <button className="cancelContainer" onClick={cancelUpdate}><b>Cancel</b></button>
                    </>
                  ) : (
                    <>
                      <button className="updateContainer" onClick={() => updateTask(index)}>
                        <img className="updateBtn" src={require("./update.png")} height={20} width={20} />
                      </button>
                      <button className="deleteContainer" onClick={() => deleteTask(index)}>
                        <img className="deleteBtn" src={require("./delete.png")} height={20} width={20} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
}

export default App;
