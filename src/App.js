import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
          <section className="header">
              <button className="header-btn hitam">Add</button>
              <h1 className="header-title">Todo Lists</h1>
              <button className="header-btn merah">Clear</button>
          </section>
          
          <section className="add">
            <form className="add-form">
              <input type="text" className="add-input"></input>
              <button className="add-btn hitam">Add</button>
            </form>
          </section>

          <section className="todos">
            <div className="todo">
              <span className="todo-txt">ss</span>
            </div>
            <div className="todo">
              <span className="todo-txt">ss</span>
            </div>
            <div className="todo">
              <span className="todo-txt">ss</span>
            </div>
            <div className="todo">
              <span className="todo-txt">ss</span>
            </div>
          </section>
      </div>
    </div>
  );
}
