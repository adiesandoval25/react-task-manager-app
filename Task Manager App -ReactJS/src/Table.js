import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ tasks, handleDelete, handleMarkCompleted }) => {

  return (
    <article className="task">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleMarkCompleted(task.id)}
                />
              </td>
              <td>
                <Link
                  to={`/task/${task.id}`}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.title}
                </Link>
              </td>
              <td>
                <Link
                  to={`/task/${task.id}`}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.description}
                </Link>
              </td>
              <td>
                <Link
                  to={`/task/${task.id}`}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.date}
                </Link>
              </td>
              <td>
                <Link to={`/task/${task.id}`}>
                  <button className="addButton">View</button>
                </Link>
                <Link to={`/edit/${task.id}`}>
                  <button className="addButton">Edit</button>
                </Link>
                <button className="addButton" onClick={() => handleDelete(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default Table;
