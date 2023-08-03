import { useParams, Link } from "react-router-dom";

const ViewTask = ({ tasks, handleDelete }) => {
    const { id } = useParams();
    const task = tasks.find(task => (task.id).toString() === id);
    return (
        <main className="ViewTask">
            <article className="task">
                {task &&
                    <>
                        <p> Title:{task.title} </p>
                        <p> Description:{task.description} </p>
                        <p> Due Date: {task.date} </p>
                        <Link to={`/edit/${task.id}`}><button className="editButton">Edit Task</button></Link>
                        <button className="deleteButton" onClick={() => handleDelete(task.id)}>
                            Delete Task
                        </button>

                        <p>
                            <Link to='/'> <button className="backButton"> Back </button></Link>
                        </p>
                    </>
                }
                {!task &&
                    <>
                        <h2>Task Not Found</h2>
                        <p> Error 404 </p>
                        <p>
                             <Link to='/'> <button className="backButton"> Back </button></Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default ViewTask