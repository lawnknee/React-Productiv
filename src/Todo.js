import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo(props) {
  const { title, description, priority } = props.todo;
  return (
      <div className="Todo">
        <div><b>{title}</b><small>(Priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
