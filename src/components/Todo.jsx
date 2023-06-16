const Todo = ({ item, clickRemoveTodosHandler, clickDoneHandler }) => {
  return (
    <div key={item.id} className="working-box-flex">
      <div className="working-box">
        <div className="main-title">{item.title}</div>
        <div className="main-content">{item.content}</div>
        <div className="btn">
          <button
            className="del-btn"
            onClick={() => {
              clickRemoveTodosHandler(item.id);
            }}
          >
            삭제하기
          </button>{" "}
          &nbsp;
          <button
            className="done-btn"
            onClick={() => {
              clickDoneHandler(item.id);
            }}
          >
            {item.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
