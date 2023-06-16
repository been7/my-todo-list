import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // todo 추가
  const clickAddBtnHandler = () => {
    const newTodos = {
      id: todos.length,
      title,
      content,
      isDone: false,
    };
    if (title === "") {
      alert("제목을 입력하세요!");
    } else if (content === "") {
      alert("내용을 입력하세요!");
    } else {
      setTodos([...todos, newTodos]);
      setTitle("");
      setContent("");
    }
  };

  // todo 삭제
  const clickRemoveTodosHandler = (id) => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };

  // 완료, 취소 토글
  const clickDoneHandler = (id) => {
    const clicked = todos.filter((todo) => todo.id === id)[0];
    clicked.isDone = !clicked.isDone;
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos, clicked]);
  };

  const enterkeyHandler = (event) => {
    if (event.key === "Enter") {
      clickAddBtnHandler();
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <div className="input">
        <div className="title-content">
          <div className="title">제목</div>
          <input
            className="input-title"
            value={title}
            onChange={titleChangeHandler}
          />
          <div className="content">내용</div>
          <input
            onKeyUp={enterkeyHandler}
            className="input-content"
            value={content}
            onChange={contentChangeHandler}
          />
        </div>
        <button className="add-btn" onClick={clickAddBtnHandler}>
          추가하기
        </button>
      </div>
      <main className="main">
        <div className="working">Working..🔥</div>
        {todos.map(function (item) {
          if (item.isDone === false) {
            return (
              <Todo
                key={item.id}
                item={item}
                clickRemoveTodosHandler={clickRemoveTodosHandler}
                clickDoneHandler={clickDoneHandler}
              />
            );
          }
        })}
        <div className="done">Done..!🎉</div>
        {todos.map(function (item) {
          if (item.isDone === true) {
            return (
              <Todo
                key={item.id}
                item={item}
                clickRemoveTodosHandler={clickRemoveTodosHandler}
                clickDoneHandler={clickDoneHandler}
              />
            );
          }
        })}
      </main>
    </div>
  );
}

export default App;
